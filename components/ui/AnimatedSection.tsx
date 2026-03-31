"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-80px 0px",
  });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
