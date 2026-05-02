"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

export default function GrowthSystem() {
  return (
    <section data-section="growth-system" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              A Complete <span className="gradient-text">Growth System</span>
            </h3>
            <p className="text-muted max-w-2xl mx-auto">
              Everything we do follows a proven 5-step framework designed to take
              your business from idea to scalable growth—and keep it growing.
            </p>
          </div>

          {/* Step flow indicator */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {growthSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-primary uppercase px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
                  {step.label}
                </span>
                {i < growthSteps.length - 1 && (
                  <span className="text-primary/40 text-sm font-light">→</span>
                )}
              </div>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap justify-center gap-5"
          >
            {growthSteps.map((step) => (
              <motion.div
                key={step.label}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(124,58,237,0.1)" }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col rounded-2xl border border-border bg-card-bg p-6 hover:border-primary/40 transition-colors duration-300 text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-black tracking-widest text-primary uppercase px-2.5 py-1 rounded-md bg-primary/10">
                    {step.label}
                  </span>
                  <span className="text-3xl font-black text-white/5 select-none">{step.number}</span>
                </div>
                <p className="text-xs font-semibold tracking-wider text-primary/70 uppercase mb-2">{step.sub}</p>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-grow">{step.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-light group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
