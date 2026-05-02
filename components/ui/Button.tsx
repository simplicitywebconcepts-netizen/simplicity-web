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
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase text-xs transition-colors duration-300 rounded-sm";

  const variantStyles = {
    primary:
      "bg-foreground text-background hover:bg-primary border-2 border-foreground hover:border-primary hover:text-white",
    outline:
      "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
    ghost:
      "bg-transparent text-foreground hover:text-primary border-2 border-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

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
      disabled={disabled}
      className={combinedClass}
    >
      {children}
    </motion.button>
  );
}
