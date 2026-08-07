import { ServiceContent } from '@/types/service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import { renderGradientTitle } from '@/components/ui/GradientTitle';

export function IncludedSection({ data }: { data: ServiceContent }) {
  if (!data.included || data.included.length === 0) return null;
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="What's Included" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.included_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.included.map(([title, desc], i) => (
              <div key={i} className="group flex flex-col gap-4 p-8 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center group-hover:scale-110 transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
