"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  "Strategy-driven approach",
  "Full-service capabilities",
  "Focus on measurable results",
  "Long-term partnership mindset",
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
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
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason}
              variants={fadeInUp}
              className="flex items-center gap-3 bg-card-bg rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm font-medium text-foreground/90">
                {reason}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
