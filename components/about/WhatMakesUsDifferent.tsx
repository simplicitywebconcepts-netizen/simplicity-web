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
            We don&apos;t just build websites—we build complete digital systems designed to grow your business. Our approach goes beyond design and development. We focus on how every part of your digital presence works together—from branding and user experience to marketing and conversion—to deliver real, measurable results. By combining strategy, creativity, and technology, we help businesses move faster, stand out, and scale with confidence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}