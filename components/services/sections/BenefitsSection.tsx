import { ServiceContent } from '@/types/service';

export function BenefitsSection({ data }: { data: ServiceContent }) {
  if (!data.benefits || data.benefits.length === 0) return null;
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{data.benefits_h2}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.benefits.map(([title, desc], i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-indigo-900/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
}
