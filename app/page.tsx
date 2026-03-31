import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FAQ from "@/components/home/FAQ";
import PageTransition from "@/components/ui/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <FeaturedProjects />
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-gray-900 to-foreground text-white relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your next project and explore how Simplicity can
            transform your digital presence with cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm bg-white text-foreground hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
