import { ServiceContent } from '@/types/service';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { renderGradientTitle } from '@/components/ui/GradientTitle';

interface HeroSectionProps {
  data: ServiceContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-20 lg:py-32">
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content card */}
          <div className="w-full rounded-2xl bg-black/45 backdrop-blur-[2px] ring-1 ring-white/10 p-6 md:p-8">
            <SectionLabel label="Services" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mt-4 mb-6">
              {renderGradientTitle(data.h1)}
            </h1>
            
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
              {data.intro}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Consultation
              </Button>
              <Button href="/works" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {data.trust && data.trust.length > 0 && (
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-zinc-500 mb-4 uppercase tracking-wider">Service Trust Indicators</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {data.trust.map((item, i) => (
                    <span key={i} className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Content - Responsive SVG illustration */}
          <div className="hidden lg:flex items-center justify-center relative min-h-[400px]">
            <div className="w-[450px] h-[450px] relative animate-pulse pointer-events-none duration-[8000ms]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_35px_rgba(124,58,237,0.15)]">
                <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" stroke="url(#paint0_linear)" strokeWidth="0.5"/>
                <path d="M50 20L75.9808 35V65L50 80L24.0192 65V35L50 20Z" stroke="url(#paint1_linear)" strokeWidth="0.5"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(139, 92, 246)" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="rgb(99, 102, 241)" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(139, 92, 246)" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="rgb(99, 102, 241)" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Ambient glow behind right SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
