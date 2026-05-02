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
    <section className="py-16 relative isolate bg-network-pattern ring-1 ring-primary/20 rounded-lg overflow-hidden">

      {/* Decorative network */}
      <div className="absolute top-0 right-0 z-10 w-1/2 h-full pointer-events-none opacity-[0.06] hidden md:block">
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

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl rounded-2xl bg-black/45 backdrop-blur-[2px] ring-1 ring-white/10 p-6 md:p-8"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel label="About Simplicity" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
          >
            About{" "}
            <span className="gradient-text">Simplicity Web Inc</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-white/90 leading-relaxed mb-4 font-medium [&_strong]:text-white">
            Simplicity Web Inc. is a full-service digital agency focused on building and scaling modern businesses through strategy, design, and technology.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-base text-white/85 leading-relaxed mb-4 font-medium">
            We partner with startups and growing companies to create high-performance websites, applications, and digital systems that drive real, measurable results.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-base text-white/85 leading-relaxed font-medium">
            From brand identity and development to marketing and growth, everything we build is designed with one goal in mind—helping your business grow.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
