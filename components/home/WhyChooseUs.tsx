"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    id: 1,
    title: "Professional. Modern. Trustworthy.",
    description:
      "We blend polished design with business-driven strategy. Every website and SEO campaign is built around one goal: helping your company grow faster and stay competitive.",
    icon: "briefcase",
  },
  {
    id: 2,
    title: "Results That Matter",
    description:
      "Our focus is on measurable outcomes like higher traffic, better engagement, and more leads. We keep communication clear, timelines predictable, and deliverables aligned with your success.",
    icon: "target",
  },
  {
    id: 3,
    title: "Proven WordPress Expertise",
    description:
      "We've built five WordPress websites and manage SEO for two active WordPress sites, so you benefit from real experience in the platform that powers millions of businesses.",
    icon: "star",
  },
];

const iconPaths: Record<string, React.ReactNode> = {
  briefcase: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  target: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 25 12 19.54 3.73 25 6.81 16.70 0 10.27 8.91 10.26 12 2" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  return (
    <section data-section="why-choose-us" className="py-24 bg-card-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Why Choose Us" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Why <span className="gradient-text">Simplicity Web Inc</span> Stands Out
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            We&apos;re not just developers-we&apos;re partners in your growth, delivering 
            strategic solutions tailored to your business.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-card-bg rounded-xl p-8 border border-border hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                {iconPaths[reason.icon]}
              </div>
              <h3 className="font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
