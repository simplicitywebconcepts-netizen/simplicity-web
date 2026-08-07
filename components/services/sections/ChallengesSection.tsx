import { ServiceContent } from '@/types/service';

export function ChallengesSection({ data }: { data: ServiceContent }) {
  if (!data.challenges || data.challenges.length === 0) return null;
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Common Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.challenges.map((challenge, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-start gap-4 group hover:bg-zinc-900 transition-colors">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-1">
                <span className="text-zinc-400 text-sm">0{i + 1}</span>
              </div>
              <p className="text-zinc-300 text-lg">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
