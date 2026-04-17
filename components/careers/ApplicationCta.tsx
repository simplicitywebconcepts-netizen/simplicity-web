import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/lib/data";

export default function ApplicationCta() {
  return (
    <section className="py-24 bg-section-bg relative z-10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-network-pattern opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection delay={0}>
          <div className="glass p-12 lg:p-20 rounded-2xl border-primary/20 bg-card-bg/50 backdrop-blur-xl group hover:border-primary/50 transition-colors duration-500">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Don&apos;t see your perfect <span className="gradient-text">role?</span>
            </h2>
            <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
              We&apos;re always on the lookout for talented, passionate people to join our team. Send us your resume and a brief intro, and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={`mailto:${contactInfo.email}?subject=Apply Now`} variant="primary" size="lg">
                Apply Now
              </Button>
              <Button href={`mailto:${contactInfo.email}?subject=Send Resume`} variant="outline" size="lg" className="border-border hover:bg-background text-foreground">
                Send Resume
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
