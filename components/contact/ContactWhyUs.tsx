"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Target,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const trustPoints: TrustPoint[] = [
  {
    id: "custom-solutions",
    title: "Custom Solutions Tailored to Your Business",
    description:
      "No one-size-fits-all approaches. Every website and strategy is tailored to your business goals, target audience, and industry.",
    icon: Sparkles,
  },
  {
    id: "experienced-team",
    title: "Experienced Digital Team",
    description:
      "Direct access to seasoned developers and digital experts committed to craftsmanship, clean code, and modern standards.",
    icon: Users,
  },
  {
    id: "strategy-driven",
    title: "Strategy-Driven Approach",
    description:
      "Every feature, pixel, and optimization is aligned with clear business objectives to deliver measurable impact.",
    icon: Target,
  },
  {
    id: "measurable-growth",
    title: "Focus on Measurable Business Growth",
    description:
      "We track what matters — traffic, engagement, leads, and ROI — to ensure your investment drives real results.",
    icon: BarChart3,
  },
];

export default function ContactWhyUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-14 md:mb-18">
          <div className="relative inline-block max-w-2xl mx-auto px-6 sm:px-8 py-5 sm:py-6 rounded-2xl">
            <div
              className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10"
              aria-hidden="true"
            />
            <SectionLabel label="Why Us" className="justify-center" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Why Work With{" "}
              <span className="bg-[linear-gradient(135deg,#7B2FF7_0%,#3E5FE5_50%,#0EA5E9_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_2px_14px_rgba(0,0,0,0.65))]">
                Simplicity Web?
              </span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              A dedicated partner focused on building digital solutions that generate real business growth.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Trust Points 4-Column Responsive Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.id}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(124, 58, 237, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="glass border border-white/15 rounded-xl p-7 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                {/* Icon Badge with Hover Glow */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-200 mb-2.5">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { ContactWhyUs };
