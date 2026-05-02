"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesHero() {
  return (
    <section className="py-16 relative isolate bg-network-pattern ring-1 ring-primary/20 rounded-lg overflow-hidden">
      {/* Decorative network dots */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg
          className="absolute top-20 right-10 w-96 h-96 opacity-[0.06] hidden md:block"
          viewBox="0 0 400 400"
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            {[
              [80, 120],
              [200, 60],
              [320, 180],
              [150, 300],
              [350, 250],
              [40, 200],
              [280, 90],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="2"
                fill="currentColor"
                opacity="0.3"
              />
            ))}
            {[
              [80, 120, 200, 60],
              [200, 60, 320, 180],
              [150, 300, 350, 250],
              [40, 200, 280, 90],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={`l${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                opacity="0.2"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl rounded-2xl bg-black/45 backdrop-blur-[2px] ring-1 ring-white/10 p-6 md:p-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="Our Services" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
          >
            Your Trusted <span className="gradient-text">Web Development Company</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/90 leading-relaxed font-medium"
          >
            We deliver high-performance digital solutions to accelerate your growth. From custom WordPress development to data-driven SEO services, our team builds scalable experiences designed for success.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
