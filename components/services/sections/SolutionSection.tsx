import { ServiceContent } from '@/types/service';

export function SolutionSection({ data }: { data: ServiceContent }) {
  if (!data.solution_h3 || data.solution_h3.length === 0) return null;
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Solution</h2>
          <p className="text-xl text-zinc-400">{data.solution_intro}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.solution_h3.map(([title, desc], i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 hover:border-zinc-700 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
