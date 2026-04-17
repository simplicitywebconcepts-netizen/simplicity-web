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

export default function CareersHero() {
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
            <SectionLabel label="Join Our Team" />
          </motion.div>
        
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-8"
          >
            Build the <span className="gradient-text">Future</span> <br className="hidden md:block" />
            of Web Innovation.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-white/90 leading-relaxed mb-10 font-medium">
            At Simplicity Web Inc., we specialize in driving digital growth. From high-impact web development jobs to competitive WordPress developer jobs and strategic SEO jobs, we are looking for passionate individuals who thrive on creativity, problem-solving, and pushing boundaries.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#open-positions"
              className="px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 font-bold text-xs tracking-widest uppercase rounded-sm"
            >
              View Open Roles
            </a>
            <a
              href="#perks"
              className="px-8 py-4 bg-transparent text-white border-2 border-white/20 hover:bg-white/10 transition-colors font-bold text-xs tracking-widest uppercase rounded-sm"
            >
              Why Simplicity Web Inc.?
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
