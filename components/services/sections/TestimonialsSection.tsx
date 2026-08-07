import { ServiceContent } from '@/types/service';

export function TestimonialsSection({ data }: { data: ServiceContent }) {
  if (!data.testimonial || data.testimonial.length < 3) return null;
  const [quote, author, role] = data.testimonial;
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="p-12 md:p-16 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 text-center relative">
          <div className="absolute top-8 left-8 text-6xl text-zinc-800 select-none">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed relative z-10">
            {quote}
          </blockquote>
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-zinc-700 mb-4 flex items-center justify-center font-bold">{author[0]}</div>
            <div className="font-bold text-lg text-white">{author}</div>
            <div className="text-sm text-zinc-500">{role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
