import { ServiceContent } from '@/types/service';

export function IndustriesSection({ data }: { data: ServiceContent }) {
  const industries = [
    "E-commerce", "Healthcare", "Finance", "Real Estate",
    "Education", "SaaS", "Manufacturing", "Entertainment"
  ];
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{data.industries_h2}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{data.industries_note}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <span key={i} className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-zinc-600 transition-colors">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
