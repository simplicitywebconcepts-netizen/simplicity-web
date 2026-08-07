import { ServiceContent } from '@/types/service';

export function WhyChooseSection({ data }: { data: ServiceContent }) {
  if (!data.why || data.why.length === 0) return null;
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{data.why_h2}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.why.map(([title, desc], i) => (
            <div key={i} className="p-8 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white block"></span>
                {title}
              </h3>
              <p className="text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
