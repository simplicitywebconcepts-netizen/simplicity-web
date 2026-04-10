"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface CallToActionProps {
  bgClass?: string;
  heading?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CallToAction({
  bgClass = "bg-section-bg/85",
  heading = (
    <>
      Ready to Build Something{" "}
      <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
        Extraordinary?
      </span>
    </>
  ),
  description = "Let's discuss your next project and explore how Simplicity Web Inc can transform your digital presence with cutting-edge technology.",
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonHref = "/works",
}: CallToActionProps) {
  return (
    <section data-section="cta" className={`py-24 text-foreground border-t border-border relative overflow-hidden ${bgClass || 'bg-card-bg/85'}`}>
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight">
            {heading}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
            {description}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm bg-foreground text-background hover:bg-primary hover:text-white transition-all duration-300"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm border-2 border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/10 transition-all duration-300"
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
