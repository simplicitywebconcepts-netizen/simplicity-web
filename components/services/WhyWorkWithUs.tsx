"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    icon: "compass",
    title: "Strategy-Driven Approach",
    description:
      "Every project starts with a clear plan. We align our work with your business goals to deliver solutions that actually move the needle.",
  },
  {
    icon: "layers",
    title: "Full-Service Capabilities",
    description:
      "From design and development to SEO and automation, we handle everything under one roof so nothing falls through the cracks.",
  },
  {
    icon: "bar-chart",
    title: "Focus on Measurable Results",
    description:
      "We track what matters — traffic, conversions, and growth — so you always have clear visibility into how your investment is performing.",
  },
  {
    icon: "users",
    title: "Long-Term Partnership Mindset",
    description:
      "We don't disappear after launch. We're a dedicated partner committed to growing alongside your business for the long haul.",
  },
];

function ReasonIcon({ name }: { name: string }) {
  const size = 24;
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "bar-chart":
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Why Us" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Why <span className="gradient-text">Work With Us</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            We go beyond traditional services—we build complete digital systems
            designed to grow your business.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="glass border border-card-border rounded-xl p-7 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ReasonIcon name={reason.icon} />
              </div>
              <h3 className="font-bold text-base mb-2">{reason.title}</h3>
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
