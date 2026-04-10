"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 bg-card-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="What Makes Us Different" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            WHAT MAKES US <span className="gradient-text">DIFFERENT</span>
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted leading-relaxed text-center"
          >
            What sets Simplicity Web Inc apart is our unwavering focus on performance and scalability, ensuring every website and app we build not only meets current needs but adapts to future demands. We embed SEO-first thinking into every project, helping your business rank higher and attract more organic traffic without compromising on design or functionality. Our partnership mindset means we work closely with you as an extension of your team, prioritizing open communication and collaborative decision-making to deliver results that truly matter. This unique combination of expert WordPress customization, data-driven SEO strategies, and transparent project management creates digital experiences that drive measurable growth and build lasting trust.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}