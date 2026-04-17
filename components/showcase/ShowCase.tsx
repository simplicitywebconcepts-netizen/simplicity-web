"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ShowCaseProps {
  src?: string;
  alt?: string;
}

export function ShowCase({ src = "", alt = "" }: ShowCaseProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const img = container.querySelector("img");
    if (!img) return;

    // Wait for image to load to get height
    const handleLoad = () => {
      const containerHeight = 600; // FIXED FRAME HEIGHT
      const imageHeight = img.offsetHeight;

      const scrollDistance = imageHeight - containerHeight;

      if (scrollDistance > 0) {
        gsap.to(img, {
          y: -scrollDistance,
          duration: 9,
          ease: "none",
          repeat: -1,
          yoyo: true, // reverse back up
        });
      }
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-black">
        {/* MAIN CONTAINER */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20">
          {/* HEADER */}
          <div className="flex items-center gap-2 px-5 py-4 bg-slate-800/50 border-b border-purple-500/20">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* VIEWPORT FRAME (IMPORTANT) */}
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ height: "600px" }} // 👈 CONTROL HEIGHT HERE
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={1500}
              className="w-full absolute top-0 left-0 object-cover"
              priority
            />
          </div>
        </div>
    </section>
  );
}
