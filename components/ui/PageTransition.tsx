"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.main>
  );
}
