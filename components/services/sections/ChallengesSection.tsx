import { ServiceContent } from '@/types/service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export function ChallengesSection({ data }: { data: ServiceContent }) {
  if (!data.challenges || data.challenges.length === 0) return null;
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel label="Challenges" className="justify-center" />
          <h2 className="text-3xl md:text-5xl font-bold">
            Common <span className="gradient-text">Challenges</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6">
            {data.challenges.map((challenge, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 flex items-start gap-4 group transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-xs font-bold">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                </div>
                <p className="text-zinc-300 text-lg">{challenge}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
