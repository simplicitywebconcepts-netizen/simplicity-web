"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "We analyze your requirements and define clear objectives.",
  },
  {
    number: "2",
    title: "Strategy & Design",
    description: "We map out the architecture and design user-centric interfaces.",
  },
  {
    number: "3",
    title: "Design & Development",
    description: "We build your solution using modern web technologies.",
  },
  {
    number: "4",
    title: "Launch",
    description: "We deploy and ensure everything runs smoothly",
  },
  {
    number: "5",
    title: "Optimize & Scale",
    description: "We continuously improve and grow your results",
  },
];

export default function OurProcess() {
  return (
    <section className="py-24 bg-card-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="How We Work" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            We follow a structured approach to ensure every project is aligned
            with your goals and built for success.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.number}
              </div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[1px] bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
