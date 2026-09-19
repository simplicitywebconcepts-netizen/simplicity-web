"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  TrendingUp,
  Palette,
  Share2,
  Target,
  BarChart3,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface ContactServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const services: ContactServiceItem[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web solutions tailored for performance and scale.",
    href: "/services#web-development",
    icon: Code,
  },
  {
    id: "seo-marketing",
    title: "SEO & Marketing",
    description:
      "Improve visibility, search rankings, organic traffic and online growth.",
    href: "/services#seo-marketing",
    icon: TrendingUp,
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    description:
      "Build a stronger, memorable, and more consistent brand identity.",
    href: "/services#design-branding",
    icon: Palette,
  },
  {
    id: "social-media",
    title: "Social Media",
    description:
      "Create, manage, and expand your social presence across modern channels.",
    href: "/services#social-media",
    icon: Share2,
  },
  {
    id: "conversion-optimization",
    title: "Conversion Optimization",
    description:
      "Turn more website visitors into qualified leads and paying customers.",
    href: "/services#conversion-optimization",
    icon: Target,
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Actionable data-driven insights to measure, optimize, and scale results.",
    href: "/services#analytics",
    icon: BarChart3,
  },
];

export default function ContactServices() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-section-bg/40">
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
            <SectionLabel label="Capabilities" className="justify-center" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              How Can We{" "}
              <span className="bg-[linear-gradient(135deg,#7B2FF7_0%,#3E5FE5_50%,#0EA5E9_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_2px_14px_rgba(0,0,0,0.65))]">
                Help?
              </span>
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              Explore our core capabilities to see how we can elevate your digital presence.
            </p>
          </div>
        </AnimatedSection>

        {/* 6 Services Responsive Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="block group h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(62, 95, 229, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="glass border border-white/15 rounded-xl p-7 hover:border-[#3E5FE5]/50 transition-all duration-300 group flex flex-col h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Card Header with Icon & Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#3E5FE5]/10 border border-[#3E5FE5]/20 flex items-center justify-center text-[#3E5FE5] group-hover:bg-[#3E5FE5] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(62,95,229,0.4)] transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div
                      className="w-8 h-8 rounded-lg bg-card-bg/60 border border-white/15 flex items-center justify-center text-gray-300 group-hover:text-[#3E5FE5] group-hover:border-[#3E5FE5]/40 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-200 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  {/* Footer Link Indicator */}
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-gray-300 group-hover:text-[#3E5FE5] transition-colors duration-200 pt-4 border-t border-white/10">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { ContactServices };
