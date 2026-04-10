"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { openPositions, contactInfo } from "@/lib/data";

export default function OpenPositions() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="open-positions" className="py-24 bg-card-bg/85 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Find your next role and help us build the future of the web.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {openPositions.map((job, index) => (
            <AnimatedSection key={job.id} delay={index * 0.1}>
              <div 
                className={`glass border rounded-lg overflow-hidden transition-colors duration-300 ${
                  expandedId === job.id ? "border-primary" : "border-card-border hover:border-primary/50"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(job.id)}
                  className="w-full text-left px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span className="flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-light" />
                      <span className="flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-light" />
                      <span className="flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="md:hidden text-sm uppercase tracking-widest text-primary font-bold">Details</span>
                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-card-border mt-2">
                        <p className="text-muted leading-relaxed mb-6">
                          {job.description}
                        </p>
                        <Button href={`mailto:${contactInfo.email}?subject=Application for ${job.title}`} variant="primary">
                          Apply Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
