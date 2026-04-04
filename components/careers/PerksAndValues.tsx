import AnimatedSection from "@/components/ui/AnimatedSection";
import { perks } from "@/lib/data";

function getIcon(name: string) {
  const size = 24;
  switch (name) {
    case "globe":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "book":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "heart":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "clock":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PerksAndValues() {
  return (
    <section id="perks" className="py-24 bg-section-bg/85 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Work With Us
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              We empower our team to do their best work. That means providing an environment where you can grow, stay healthy, and enjoy life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <AnimatedSection key={perk.id} delay={index * 0.1}>
              <div className="glass p-8 rounded-lg h-full border border-card-border hover:border-primary/50 transition-colors duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getIcon(perk.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-muted leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
