"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  const defaultCaseStudySlug =
    caseStudies[0]?.slug ?? "toronto-hypertension-clinic";

  return (
    <section
      data-section="projects"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel label="Recent Work" className="justify-center" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Explore a selection of our recent projects—from websites and
            applications to branding and digital growth solutions—built to
            deliver real results.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {featured.map((project) => {
            const hasProjectImage = project.image.trim() !== "";

            return (
              <Link
                key={project.id}
                href={`/works/${project.caseStudySlug ?? defaultCaseStudySlug}`}
                className="block h-full"
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl overflow-hidden border border-border bg-card-bg hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer h-full flex flex-col"
                >
                  {/* Project image */}
                  <div className="relative h-56 sm:h-64 md:h-72 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                    {hasProjectImage ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
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
                    )}
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-semibold tracking-wider uppercase bg-card-bg/90 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 text-primary">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-xs font-semibold tracking-wider uppercase text-primary group-hover:tracking-widest transition-all duration-300">
                        Case Study →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
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
