import { ServiceContent } from '@/types/service';

export function IncludedSection({ data }: { data: ServiceContent }) {
  if (!data.included || data.included.length === 0) return null;
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{data.included_h2}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.included.map(([title, desc], i) => (
            <div key={i} className="group flex flex-col gap-4 p-8 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
