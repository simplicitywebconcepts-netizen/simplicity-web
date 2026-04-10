"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  return (
    <section data-section="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative network dots */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 right-10 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            {[[80,120],[200,60],[320,180],[150,300],[350,250],[40,200],[280,90],[180,350],[360,320],[100,380]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" opacity="0.3" />
            ))}
            {[[80,120,200,60],[200,60,320,180],[150,300,350,250],[40,200,280,90],[180,350,360,320],[100,380,80,120]].map(([x1,y1,x2,y2], i) => (
              <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.2" />
            ))}
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel label="Toronto Web Development" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Toronto Web Development & SEO Services for Growing Businesses
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted/80 mb-6 font-medium"
            >
              Powered by <span className="text-primary">Simplicity Web Inc</span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted leading-relaxed mb-8"
            >
              We specialize in{" "}
              <span className="font-semibold text-foreground">WordPress development</span>,{" "}
              <span className="font-semibold text-foreground">SEO services</span>, Custom Web Applications, and Mobile App Development. We craft digital experiences that rank higher, attract leads, build authority, and convert visitors into customers.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button href="/works" variant="primary" size="lg">
                View Our Work
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-10 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "5+", label: "WordPress Sites Built" },
                { value: "2", label: "Active SEO Clients" },
                { value: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D Canvas Placeholder */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center relative min-h-[500px]"
          >
            {/* The 3D CrystalCanvas renders in layout.tsx behind this */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
