"use client";

import { useScrollData } from "./ScrollProvider";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function SceneLighting() {
  const { activeSection } = useScrollData();
  const rimLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (rimLightRef.current) {
        // Brighten rim lighting when in services section
        const targetIntensity = activeSection === "services" ? 8 : 4;
        rimLightRef.current.intensity = THREE.MathUtils.lerp(
           rimLightRef.current.intensity,
           targetIntensity,
           0.05
        );
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      
      {/* Front soft fill */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2.0} 
        color="#f8fafc" 
      />
      
      {/* Cool blue fill from below */}
      <directionalLight 
        position={[-5, -5, 2]} 
        intensity={1.0} 
        color="#e0e7ff" 
      />

      {/* Purple rim light from back-left (reference the deep purple hues) */}
      <pointLight
        ref={rimLightRef}
        position={[-10, 5, -5]}
        intensity={4}
        color="#7c3aed"
        distance={30}
        decay={1.5}
      />
      
      {/* Subtle icy blue rim from back-right */}
      <pointLight
        position={[10, -2, -5]}
        intensity={2.5}
        color="#93c5fd"
        distance={25}
        decay={2}
      />
    </>
  );
}
