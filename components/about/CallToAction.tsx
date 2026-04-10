"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
          >
            Ready to Grow Your <span className="gradient-text">Business?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how Simplicity Web Inc can help your startup or small business thrive online. Contact us today for a free consultation that includes an SEO audit and discover the difference a dedicated web development company can make.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}