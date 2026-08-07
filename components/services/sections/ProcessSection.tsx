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

export function ProcessSection({ data }: { data: ServiceContent }) {
  if (!data.process || data.process.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Our Process" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            {renderGradientTitle(data.process_h2)}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {data.process.map(([title, desc], i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black/55 bg-zinc-800 text-zinc-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_2px_rgba(255,255,255,0.05)] group-hover:bg-primary group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10">
                  <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                  <p className="text-zinc-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

