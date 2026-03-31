"use client";

import { motion } from "framer-motion";
import { lineExpand, fadeInUp } from "@/lib/animations";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <motion.div
        variants={lineExpand}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[2px] bg-primary"
      />
      <motion.span
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xs font-semibold tracking-[0.2em] uppercase text-muted"
      >
        {label}
      </motion.span>
    </div>
  );
}
