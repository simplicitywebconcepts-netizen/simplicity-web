import { ServiceContent } from '@/types/service';

export function TestimonialsSection({ data }: { data: ServiceContent }) {
  if (!data.testimonial || data.testimonial.length < 3) return null;
  const [quote, author, role] = data.testimonial;
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="p-8 md:p-12 rounded-2xl bg-black/55 backdrop-blur-[2px] border border-white/10 ring-1 ring-white/10 text-center relative">
          <figure className="relative z-10">
            <blockquote className="text-lg md:text-xl font-medium text-white mb-8 leading-relaxed">
              “{quote}”
            </blockquote>
            <figcaption className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold flex items-center justify-center text-lg mb-4 shadow-sm">
                {author[0]}
              </div>
              <div className="flex items-center justify-center space-x-3 text-sm md:text-base">
                <div className="font-semibold text-white">{author}</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-zinc-500">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-zinc-400">{role}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

