"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section data-section="projects" className="py-24 bg-section-bg/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Recent Work" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Explore our recent work across cloud infrastructure, software
            development, and cybersecurity solutions.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group rounded-xl overflow-hidden border border-border bg-card-bg hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 flex items-center justify-center"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-primary"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </motion.div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-card-bg/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 text-primary">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="text-xs font-semibold tracking-wider uppercase text-primary group-hover:tracking-widest transition-all duration-300">
                  Case Study →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="text-center mt-12">
          <Button href="/works" variant="outline" size="lg">
            View All Projects
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
