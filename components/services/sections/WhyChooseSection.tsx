import { ServiceContent } from '@/types/service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

function renderGradientTitle(title: string) {
  if (!title) return null;
  const words = title.trim().split(/\s+/);
  if (words.length <= 2) {
    return <span className="gradient-text">{title}</span>;
  }
  const splitIndex = Math.max(1, words.length - 2);
  const mainText = words.slice(0, splitIndex).join(' ');
  const gradientText = words.slice(splitIndex).join(' ');
  return (
    <>
      {mainText}{' '}
      <span className="gradient-text">{gradientText}</span>
    </>
  );
}

export function WhyChooseSection({ data }: { data: ServiceContent }) {
  if (!data.why || data.why.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Why Choose Us" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.why_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.why.map(([title, desc], i) => (
              <div key={i} className="p-8 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary block"></span>
                  {title}
                </h3>
                <p className="text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

