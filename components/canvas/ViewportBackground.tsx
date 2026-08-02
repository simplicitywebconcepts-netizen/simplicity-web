"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CrystalSVG } from "@/components/canvas/CrystalSVG";

const CrystalCanvas = dynamic(
  () => import("@/components/canvas/CrystalCanvas").then((mod) => mod.CrystalCanvas)
);

export function ViewportBackground() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    // Initial render / SSR: show blank placeholder but keep dark theme container
    return <div className="fixed inset-0 z-0 bg-[#050505]" aria-hidden="true" />;
  }

  return isMobile ? <CrystalSVG /> : <CrystalCanvas />;
}
