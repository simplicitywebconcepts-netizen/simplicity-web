"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects, projectCategories } from "@/lib/data";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {projectCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? "bg-foreground text-white border-foreground"
                : "bg-white text-muted border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              layout
              whileHover={{ y: -5 }}
              className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative h-44 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/10 flex items-center justify-center"
                  >
                    <svg
                      width="28"
                      height="28"
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

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-primary border border-primary/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-3">
                  {project.description}
                </p>
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
