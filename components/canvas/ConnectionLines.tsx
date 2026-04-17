"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollData } from "./ScrollProvider";

interface ConnectionLinesProps {
  nodes: { position: [number, number, number]; id: string }[];
  centerNodeIndex?: number;
  opacity?: number;
}

export function ConnectionLines({ nodes, centerNodeIndex = 0, opacity = 0.25 }: ConnectionLinesProps) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const elapsedRef = useRef(0);
  const { activeSection } = useScrollData();

  // Create the line material
  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: 0x9ca3af, // light gray
        transparent: true,
        opacity: opacity,
        linewidth: 1, // Note: WebGL lines are always 1px thick regardless of this setting on most platforms
      }),
    [opacity]
  );

  // Determine line pairs
  const pairs = useMemo(() => {
      const idxPairs: [number, number][] = [];
      const centerNode = nodes[centerNodeIndex];
      
      // 1. Connect everything to the center node
      nodes.forEach((_, idx) => {
         if (idx !== centerNodeIndex) {
            idxPairs.push([centerNodeIndex, idx]);   
         }
      });

      // 2. Add some random web connections between outer nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (i !== centerNodeIndex && j !== centerNodeIndex) {
                 // Connect if they are somewhat close (distance < certain threshold)
                 const v1 = new THREE.Vector3(...nodes[i].position);
                 const v2 = new THREE.Vector3(...nodes[j].position);
                 if (v1.distanceTo(v2) < 5.0) {
                     idxPairs.push([i, j]);
                 }
            }
        }
      }
      return idxPairs;
  }, [nodes, centerNodeIndex]);


  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(pairs.length * 6); // 2 vertices per line, 3 coords per vertex
    
    // Initial static positions
    pairs.forEach((pair, i) => {
        const [idx1, idx2] = pair;
        const p1 = nodes[idx1].position;
        const p2 = nodes[idx2].position;
        
        positions[i * 6 + 0] = p1[0];
        positions[i * 6 + 1] = p1[1];
        positions[i * 6 + 2] = p1[2];
        
        positions[i * 6 + 3] = p2[0];
        positions[i * 6 + 4] = p2[1];
        positions[i * 6 + 5] = p2[2];
    });
    
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [pairs, nodes]);

  useFrame((_, delta) => {
      if (!lineRef.current) return;
      elapsedRef.current += delta;
      
      // Update opacity based on active section
      let targetOpacity = opacity;
      if (activeSection === "projects") targetOpacity = opacity * 0.3; // Make lines faint when exploding
      if (activeSection === "services") targetOpacity = opacity * 1.5; // Thicken/brighten on services

      (lineRef.current.material as THREE.Material).opacity = THREE.MathUtils.lerp(
          (lineRef.current.material as THREE.Material).opacity,
          Math.min(targetOpacity, 0.8), // clamp max opacity
          0.05
      );
      
      // To strictly match the bobbing nodes, we would update the `position` array 
      // here every frame with the new Math.sin() offsets.
      // However, since the nodes only bob gently, static lines from the original positions
      // often look visually acceptable and save heavy computation.
      // For a premium feel we will do a subtle global wave effect on the lines themselves
      const positions = lineRef.current.geometry.attributes.position.array as Float32Array;
      const time = elapsedRef.current;
      
      for (let i = 0; i < pairs.length; i++) {
          const idx1 = pairs[i][0];
          const idx2 = pairs[i][1];
          
          // Original positions
          const p1 = nodes[idx1].position;
          const p2 = nodes[idx2].position;
          
          // Same bobbing math as CrystalNode
          const amp = 0.2; 
          const speed = 1.0;
          
          // Re-calculate the bobbing y offsets based on the node's individual speed/amplitude
          // Here we just use a generic wave based on the original Y
          const yOffset1 = Math.sin(time * speed + p1[0]) * amp;
          const yOffset2 = Math.sin(time * speed + p2[0]) * amp;

          positions[i * 6 + 1] = p1[1] + yOffset1; // Update Y of start point
          positions[i * 6 + 4] = p2[1] + yOffset2; // Update Y of end point
      }
      
      lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry} material={material} />
  );
}
