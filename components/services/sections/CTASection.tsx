import { ServiceContent } from '@/types/service';
import Link from 'next/link';

export function CTASection({ data }: { data: ServiceContent }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 -z-10"></div>
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{data.cta_h2}</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">{data.cta_body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
