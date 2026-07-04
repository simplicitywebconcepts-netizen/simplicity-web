import type { Metadata } from "next";
import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";
import SectionLabel from "@/components/ui/SectionLabel";
import { caseStudies } from "@/lib/case-studies";
import { navLinks, footerServices } from "@/lib/data";
import { 
  Compass, 
  Settings, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Simplicity Web Inc",
  description:
    "Navigate through our services, core pages, and detailed healthcare, beauty, and automotive website case studies.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Navigation",
      description: "Our primary website sections and information pages.",
      icon: <Compass className="w-6 h-6 text-primary" />,
      links: navLinks,
    },
    {
      title: "Our Services",
      description: "Custom software and digital marketing solutions we deliver.",
      icon: <Settings className="w-6 h-6 text-primary" />,
      links: footerServices,
    },
    {
      title: "Case Studies & Work",
      description: "Our comprehensive portfolio of client success stories.",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      links: caseStudies.map((cs) => ({
        href: `/works/${cs.slug}`,
        label: cs.title,
        badge: cs.industry,
      })),
    },
  ];

  return (
    <PageTransition>
      <section className="relative py-24 bg-network-pattern min-h-screen overflow-hidden">
        {/* Glow backgrounds */}
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <SectionLabel label="Sitemap" className="justify-center" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-[1.1] font-display">
              WEBSITE <span className="gradient-text">STRUCTURE</span>
            </h1>
            <p className="text-muted mt-4 text-lg">
              Navigate easily through our web pages, specialized services, and active 
              client case studies. Find everything you need in one place.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-8 border border-border/50 bg-card-bg/40 backdrop-blur-md flex flex-col hover:border-primary/20 transition-all duration-500 shadow-xl group"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-display tracking-wide text-foreground">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-muted mb-8 leading-relaxed">
                  {section.description}
                </p>

                {/* Links List */}
                <ul className="space-y-4 flex-grow">
                  {section.links.map((link, linkIdx) => {
                    const hasBadge = "badge" in link;
                    const badgeText = hasBadge ? (link as any).badge : undefined;
                    return (
                      <li key={linkIdx} className="border-b border-border/30 pb-3 last:border-b-0 last:pb-0">
                        <Link
                          href={link.href}
                          className="flex items-center justify-between text-foreground/80 hover:text-primary transition-all duration-300 group/link"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium leading-none">
                              {link.label}
                            </span>
                            {hasBadge && (
                              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light font-semibold">
                                {badgeText}
                              </span>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted group-hover/link:text-primary group-hover/link:translate-x-1 transition-all duration-300" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Callout block */}
          <div className="mt-16 glass rounded-2xl p-8 border border-border/50 bg-card-bg/20 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/15 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                <Sparkles className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display">Need a custom SEO & Web Development Strategy?</h3>
                <p className="text-sm text-muted mt-1">Our team builds high-performance WordPress sites and custom web apps with technical SEO baked in.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium text-sm transition-all duration-300 shrink-0 shadow-lg shadow-primary/20 flex items-center gap-2 group/btn"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
