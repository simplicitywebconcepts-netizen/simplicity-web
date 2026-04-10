"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { values } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { ReactNode } from "react";

const valueIcons: Record<string, ReactNode> = {
  lightbulb: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

export default function Values() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Our Mission & Vision" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            MISSION, VISION & <span className="gradient-text">APPROACH</span>
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)",
              }}
              className="bg-card-bg rounded-xl p-6 border border-border text-center group hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {valueIcons[value.icon]}
              </div>
              <h3 className="font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
