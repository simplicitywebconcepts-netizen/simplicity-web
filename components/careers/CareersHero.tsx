import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CareersHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatedSection delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-semibold tracking-widest uppercase mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Join Our Team
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Build the <span className="gradient-text">Future</span> <br className="hidden md:block" />
            of Web Innovation.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            At SIMPLICITY WEB INC, we are shaping digital excellence. We're looking for passionate individuals who thrive on creativity, problem-solving, and pushing boundaries.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="px-8 py-4 bg-foreground text-background hover:bg-primary hover:text-white hover:border-primary transition-colors border-2 border-transparent font-bold text-xs tracking-widest uppercase rounded-sm"
            >
              View Open Roles
            </a>
            <a
              href="#perks"
              className="px-8 py-4 bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-bold text-xs tracking-widest uppercase rounded-sm"
            >
              Why Simplicity?
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
