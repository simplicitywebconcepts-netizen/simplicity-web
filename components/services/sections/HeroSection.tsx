import Link from 'next/link';
import { ServiceContent } from '@/types/service';

interface HeroSectionProps {
  data: ServiceContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            {data.h1}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300 w-full sm:w-auto"
            >
              Get a Free Consultation
            </Link>
            <Link 
              href="/works"
              className="px-8 py-4 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors duration-300 w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {data.trust && data.trust.length > 0 && (
            <div className="pt-8 border-t border-zinc-800/50">
              <p className="text-sm text-zinc-500 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
                {data.trust.map((item, i) => (
                  <span key={i} className="text-xl font-bold text-zinc-400">{item}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative crystal SVG background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" stroke="url(#paint0_linear)" strokeWidth="0.5"/>
          <path d="M50 20L75.9808 35V65L50 80L24.0192 65V35L50 20Z" stroke="url(#paint1_linear)" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl -z-20 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-600/20 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}
