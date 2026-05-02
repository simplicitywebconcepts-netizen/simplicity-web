"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const serviceHighlights = [
  {
    title: "Web Design & Development",
    description:
      "Modern, high-performance websites designed for user experience, speed, and conversion across all devices.",
    icon: "🌐",
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored platforms built to solve real business challenges and support scalable growth.",
    icon: "⚙️",
  },
  {
    title: "eCommerce Development",
    description:
      "Secure, scalable online stores designed to drive sales and support your business growth.",
    icon: "🛒",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Strategic branding and visual identity systems that create consistency, recognition, and impact.",
    icon: "🎨",
  },
  {
    title: "SEO & Digital Visibility",
    description:
      "Increase your online presence with strategies designed to attract qualified traffic and drive long-term growth.",
    icon: "📈",
  },
  {
    title: "Social Media & Content",
    description:
      "Engaging content and social media strategies built to grow your audience and strengthen your brand.",
    icon: "📣",
  },
  {
    title: "AI Search & Discovery Optimization",
    description:
      "Position your business to be found across modern search platforms, including AI-driven tools like ChatGPT and emerging discovery engines.",
    icon: "🤖",
  },
];

export default function ServicesHighlight() {
  return (
    <section
      data-section="specializations"
      className="py-24 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Specializations" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            What We <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            From strategy to execution, we cover every angle of your digital presence.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {serviceHighlights.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(124,58,237,0.12)" }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] flex flex-col rounded-2xl border border-border bg-card-bg/70 p-7 hover:border-primary/50 transition-colors duration-300 group cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-xl mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted flex-grow">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}