import { ServiceContent } from '@/types/service';

export function TechSection({ data }: { data: ServiceContent }) {
  if (!data.tech || data.tech.length === 0) return null;
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{data.tech_h2}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.tech.map(([name, role], i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/30 flex flex-col items-center justify-center text-center hover:bg-zinc-900/60 transition-colors">
              <h3 className="font-semibold text-white mb-1">{name}</h3>
              <p className="text-xs text-zinc-500">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
