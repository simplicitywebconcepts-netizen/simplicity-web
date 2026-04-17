"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { teamMembers } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Leadership() {
  return (
    <section className="py-24 bg-section-bg/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Our Team" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            OUR <span className="gradient-text">LEADERSHIP</span>
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group cursor-default"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-border group-hover:border-primary/30 transition-colors duration-300 flex items-center justify-center overflow-hidden">
                  {/* Generated avatar with initials */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary/60 group-hover:text-primary transition-colors">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-section-bg" />
              </div>

              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {member.name}
              </h4>
              <p className="text-xs text-muted mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
