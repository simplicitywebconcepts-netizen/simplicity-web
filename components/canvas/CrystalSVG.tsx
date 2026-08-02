"use client";

import { motion } from "framer-motion";

export function CrystalSVG() {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden bg-[#050505]"
      aria-hidden="true"
    >
      <svg 
        className="w-[120vw] h-[120vh] md:w-[100vw] md:h-[100vh] max-w-7xl opacity-[0.15]" 
        viewBox="0 0 800 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="400" cy="400" r="300" fill="url(#glow)" />

        {/* Floating crystal outlines */}
        <motion.g
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Central dominant node */}
          <polygon 
            points="400,250 480,400 400,550 320,400" 
            stroke="#7c3aed" 
            strokeWidth="1.5" 
            fill="#7c3aed" 
            fillOpacity="0.03" 
          />
          <line x1="400" y1="250" x2="400" y2="550" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="320" y1="400" x2="480" y2="400" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2 2" />

          {/* Connection Vertices */}
          <circle cx="400" cy="250" r="3" fill="#a78bfa" />
          <circle cx="400" cy="550" r="3" fill="#a78bfa" />
          <circle cx="320" cy="400" r="3" fill="#a78bfa" />
          <circle cx="480" cy="400" r="3" fill="#a78bfa" />
        </motion.g>

        {/* Outer connection nodes */}
        <motion.g
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Upper-left node */}
          <polygon points="260,200 300,260 260,320 220,260" stroke="#7c3aed" strokeWidth="1" fill="none" />
          <line x1="300" y1="260" x2="320" y2="400" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="3 3" />
          
          {/* Upper-right node */}
          <polygon points="540,200 580,260 540,320 500,260" stroke="#7c3aed" strokeWidth="1" fill="none" />
          <line x1="500" y1="260" x2="480" y2="400" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="3 3" />
        </motion.g>
      </svg>
    </div>
  );
}
