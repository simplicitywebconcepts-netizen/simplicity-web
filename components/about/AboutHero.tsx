"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

// Pre-computed deterministic positions for network nodes
const circlePositions = [
  [120, 80], [340, 150], [500, 60], [80, 280], [290, 340],
  [450, 200], [180, 450], [380, 500], [540, 380], [60, 520],
  [220, 180], [490, 480], [150, 350], [400, 100], [300, 560],
];

const linePositions = [
  [120, 80, 340, 150], [340, 150, 500, 60], [80, 280, 290, 340],
  [290, 340, 450, 200], [180, 450, 380, 500], [540, 380, 490, 480],
  [60, 520, 150, 350], [400, 100, 220, 180], [300, 560, 180, 450],
  [500, 60, 540, 380],
];

export default function AboutHero() {
  return (
    <section className="py-24 relative bg-network-pattern">
      {/* Decorative network */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 600 600">
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            {circlePositions.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" opacity="0.4" />
            ))}
            {linePositions.map(([x1, y1, x2, y2], i) => (
              <line key={`line-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.15" />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="About Simplicity" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            MEET THE MINDS BEHIND{" "}
            <span className="gradient-text">TECHVOLVE.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-muted leading-relaxed mb-4">
            Techvolve is a company history that embraces the company&apos;s
            embrace cultures, and multifaceted environments, subject
            audiences and financially marketing.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-base text-muted leading-relaxed">
            Our frontline agency community is made of infrastructure, cloud,
            software, commerce, email, software, and focusing consulting for
            ambitious businesses.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
