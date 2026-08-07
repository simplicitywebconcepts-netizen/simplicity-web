import { ServiceContent } from '@/types/service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export function SolutionSection({ data }: { data: ServiceContent }) {
  if (!data.solution_h3 || data.solution_h3.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <SectionLabel label="The Solution" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Solution</span>
          </h2>
          {data.solution_intro && (
            <p className="text-xl text-zinc-400">{data.solution_intro}</p>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.solution_h3.map(([title, desc], i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
