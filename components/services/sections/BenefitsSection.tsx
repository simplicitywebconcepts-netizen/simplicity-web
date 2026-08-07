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

export function BenefitsSection({ data }: { data: ServiceContent }) {
  if (!data.benefits || data.benefits.length === 0) return null;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Key Benefits" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.benefits_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map(([title, desc], i) => (
              <div key={i} className="p-8 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 hover:-translate-y-1 transition-all duration-300">
                <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-md mb-3 inline-block">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                <p className="text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-indigo-900/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
}
