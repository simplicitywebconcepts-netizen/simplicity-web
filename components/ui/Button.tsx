"use client";

import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase text-xs transition-colors duration-300 rounded-sm cursor-pointer";

  const variantStyles = {
    primary:
      "bg-foreground text-white hover:bg-primary border-2 border-foreground hover:border-primary",
    outline:
      "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-white",
    ghost:
      "bg-transparent text-foreground hover:text-primary border-2 border-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    variants: buttonHover,
    initial: "rest",
    whileHover: "hover",
    whileTap: "tap",
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={combinedClass}
    >
      {children}
    </motion.button>
  );
}
