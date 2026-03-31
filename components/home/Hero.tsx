"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-network-pattern">
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
              <SectionLabel label="Web Innovation Studio" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              We Build{" "}
              <span className="gradient-text">Digital Solutions</span>{" "}
              That Matter.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted leading-relaxed mb-8"
            >
              Simplicity is a premier technology company specializing in cloud
              infrastructure, software development, and IoT solutions. We
              transform ambitious ideas into scalable, secure, and elegant
              digital products.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button href="/projects" variant="primary" size="lg">
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
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
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

          {/* Right — Abstract visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Floating geometric shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-light/10 border border-primary/10"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-10 left-0 w-48 h-48 rounded-2xl bg-gradient-to-tr from-accent/15 to-primary-light/5 border border-accent/10"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/3 left-1/4 w-32 h-32 rounded-xl bg-gradient-to-bl from-primary/25 to-transparent border border-primary/15"
              />
              
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* Dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-primary/40"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + (i % 3) * 30}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
