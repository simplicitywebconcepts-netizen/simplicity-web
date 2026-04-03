"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

import { CrystalNode } from "./CrystalNode";
import { ConnectionLines } from "./ConnectionLines";
import { SceneLighting } from "./SceneLighting";
import { useScrollData } from "./ScrollProvider";

// Define the 7 crystal nodes based on the reference layout
const NODE_DATA = [
  // 0: Central dominant node
  { id: "center", position: [1.5, 0, 0] as [number, number, number], scale: 3.0, bobSpeed: 0.8, bobAmp: 0.15 },
  // 1: Upper-left
  { id: "ul", position: [-2.5, 2.5, -1] as [number, number, number], scale: 0.8, bobSpeed: 1.2, bobAmp: 0.2 },
  // 2: Upper-center
  { id: "uc", position: [0.5, 3, -0.5] as [number, number, number], scale: 0.9, bobSpeed: 0.9, bobAmp: 0.25 },
  // 3: Upper-right
  { id: "ur", position: [4, 2, 0.5] as [number, number, number], scale: 0.85, bobSpeed: 1.1, bobAmp: 0.18 },
  // 4: Mid-left
  { id: "ml", position: [-3, 0.5, -1.5] as [number, number, number], scale: 0.7, bobSpeed: 1.0, bobAmp: 0.22 },
  // 5: Lower-left
  { id: "ll", position: [-1, -2.5, -0.5] as [number, number, number], scale: 0.65, bobSpeed: 1.3, bobAmp: 0.19 },
  // 6: Far-left ghost
  { id: "fl", position: [-5, 1, -2] as [number, number, number], scale: 0.5, bobSpeed: 0.7, bobAmp: 0.1 },
];

function SceneController() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouseX, mouseY, activeSection, scrollProgress } = useScrollData();

  useFrame((state) => {
    if (!groupRef.current) return;

    // 1. Mouse orbit/tilt effect
    const currentX = mouseX.get();
    let currentY = mouseY.get();

    // 2. Scroll baseline rotation (slow orbit during scroll)
    const scrollVal = scrollProgress.get();
    
    // Invert Y mouse effect based on section so it doesn't fight scroll too much,
    // or just let them combine. We'll combine them:
    const targetRotX = currentY * 0.2 + (scrollVal * 0.1); 
    const targetRotY = currentX * 0.2 + (scrollVal * 0.5); 

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);

    // 3. Section specific reactions
    if (activeSection === "projects") {
       // Fragment/explode state
       groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 2, 0.02); // Pull closer
    } else if (activeSection === "cta") {
       // Fold tightly
       groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 0.8, 0.05));
    } else {
       // Default
       groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, 0.05);
       groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 1.0, 0.05));
    }
  });

  return (
    <group ref={groupRef}>
      {NODE_DATA.map((n, i) => (
        <CrystalNode
          key={n.id}
          position={n.position}
          scale={n.scale}
          bobAmplitude={n.bobAmp}
          bobSpeed={n.bobSpeed}
          edgeOpacity={i === 6 ? 0.3 : 0.6} // Ghost node
          mainColor={i === 6 ? "#a78bfa" : "#7c3aed"} // Ghost node is lighter
        />
      ))}
      <ConnectionLines nodes={NODE_DATA} />
    </group>
  );
}

export function CrystalCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR hydration mismatches

  return (
    <div 
      id="crystal-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]} // Cap pixel ratio to 2 for performance
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        {/* Subtle environment map for realistic glass reflection */}
        <Environment preset="city" />
        
        <SceneLighting />
        <SceneController />
        
        {/* Fog to obscure the back shapes very slightly like the reference image */}
        <fog attach="fog" args={["#f0f2fa", 5, 20]} />
      </Canvas>
    </div>
  );
}
