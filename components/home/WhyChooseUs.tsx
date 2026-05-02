"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import type { ReactNode } from "react";

const reasons = [
  {
    id: 1,
    title: "Strategy-Driven Approach",
    description:
      "We combine design, development, and marketing into one cohesive strategy—ensuring everything we build is aligned with your business goals and built for long-term growth.",
    icon: "rocket",
  },
  {
    id: 2,
    title: "Results-Focused Execution",
    description:
      "Our work is driven by measurable outcomes—from increased visibility and traffic to higher engagement and lead generation. Every decision is made with performance in mind.",
    icon: "target",
  },
  {
    id: 3,
    title: "Full-Service Capabilities",
    description:
      "From websites and applications to branding, SEO, and social media, we provide everything needed to build, launch, and scale your business under one roof.",
    icon: "briefcase",
  },
  {
    id: 4,
    title: "Long-Term Partnerships",
    description:
      "We focus on building lasting relationships, working closely with our clients to continuously improve, adapt, and grow as their business evolves.",
    icon: "star",
  },
];

const growthSteps = [
  {
    number: "01",
    label: "BUILD",
    sub: "Websites, Apps & Infrastructure",
    description:
      "We craft your core digital foundation — fast, responsive websites, custom web apps, and e-commerce stores built for performance and longevity.",
    tags: ["Custom Websites", "Web Apps", "eCommerce", "Hosting & Maintenance"],
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    number: "02",
    label: "BRAND",
    sub: "Design, Identity & Visual Assets",
    description:
      "Your brand is your first impression. We develop cohesive visual identities—logos, style guides, UI/UX design—that build trust and recognition at every touchpoint.",
    tags: ["Logo & Brand Identity", "UI/UX Design", "Marketing Collateral"],
    color: "from-fuchsia-500/20 to-pink-500/10",
  },
  {
    number: "03",
    label: "GROW",
    sub: "SEO, Ads & Social Media",
    description:
      "With the foundation in place, we drive qualified traffic through data-driven SEO, targeted paid advertising, and a consistent social media presence.",
    tags: ["SEO & Content", "Google & Meta Ads", "Social Media Management"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    number: "04",
    label: "CONVERT",
    sub: "Funnels, Optimization & Lead Systems",
    description:
      "Traffic without conversion is just noise. We build high-converting landing pages, optimize user journeys, and implement lead capture systems that turn visitors into customers.",
    tags: ["Landing Pages", "CRO", "Lead Funnels", "Email Automation"],
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    number: "05",
    label: "SCALE",
    sub: "Strategy, Automation & Ongoing Growth",
    description:
      "We don't disappear after launch. We analyze data, refine strategies, implement automation, and continuously push your business forward as it evolves and grows.",
    tags: ["CRM & Automation", "Analytics & Reporting", "Growth Strategy"],
    color: "from-orange-500/20 to-amber-500/10",
  },
];

const iconPaths: Record<string, ReactNode> = {
  rocket: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  target: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  briefcase: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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
            We&apos;re not just developers—we&apos;re a growth-focused partner
            dedicated to building digital systems that drive real business results.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
