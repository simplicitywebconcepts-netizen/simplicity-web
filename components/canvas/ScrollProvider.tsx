"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useMotionValue, useSpring, MotionValue, useVelocity } from "framer-motion";

export type SectionType = "hero" | "services" | "projects" | "faq" | "cta" | "footer";

interface ScrollContextType {
  scrollProgress: MotionValue<number>;
  scrollVelocity: MotionValue<number>;
  activeSection: SectionType;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function useScrollData() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollData must be used within a ScrollProvider");
  }
  return context;
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollProgress = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollProgress);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const [activeSection, setActiveSection] = useState<SectionType>("hero");

  // Track overall scroll progress for parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      scrollProgress.set(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress]);

  // Track mouse coordinates for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSection: SectionType | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.getAttribute("data-section") as SectionType | null;
          }
        });

        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollProgress,
        scrollVelocity,
        activeSection,
        mouseX: smoothMouseX,
        mouseY: smoothMouseY,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
