"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollData } from "./ScrollProvider";

interface CrystalNodeProps {
  position: [number, number, number];
  scale?: number;
  rotationSpeed?: [number, number, number];
  bobSpeed?: number;
  bobAmplitude?: number;
  mainColor?: string;
  wireframeColor?: string;
  edgeOpacity?: number;
}

export function CrystalNode({
  position,
  scale = 1,
  rotationSpeed = [0.002, 0.003, 0.001],
  bobSpeed = 1,
  bobAmplitude = 0.2,
  mainColor = "#7c3aed",
  wireframeColor = "#d1d5db",
  edgeOpacity = 0.6
}: CrystalNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { activeSection } = useScrollData();
  const initialY = position[1];

  // Geometries – Octahedron is a rough approximation of the reference image's crystalline geometry
  const geometry = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);
  const wireGeometry = useMemo(() => new THREE.WireframeGeometry(new THREE.OctahedronGeometry(1.05, 0)), []);
  
  // Custom glass material 
  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: mainColor,
        emissive: "#1e1b4b",
        emissiveIntensity: 0.2,
        roughness: 0.2,
        metalness: 0.4,
        transparent: true,
        opacity: 0.75,
        side: THREE.BackSide,
      }),
    [mainColor]
  );

  // Wireframe material
  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: wireframeColor,
        transparent: true,
        opacity: edgeOpacity,
        depthWrite: false
      }),
    [wireframeColor, edgeOpacity]
  );
  
  // Vertex dots material
  const dotMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#a78bfa",
        roughness: 0.3,
        metalness: 0.5,
        emissive: "#7c3aed",
        emissiveIntensity: 0.5
      }),
    []
  );

  // Extract vertices to place dots and lines accurately
  const vertices = useMemo(() => {
    const verts: THREE.Vector3[] = [];
    const posAttribute = geometry.attributes.position;
    for (let i = 0; i < posAttribute.count; i++) {
        // Just the unique basic octahedron 6 vertices
        const v = new THREE.Vector3().fromBufferAttribute(posAttribute, i);
        // Deduplicate roughly (since basic Octahedron Geometry doesn't have many)
        if (!verts.find(existing => existing.distanceTo(v) < 0.01)) {
            verts.push(v);
        }
    }
    return verts;
  }, [geometry]);

  // Animation loop
  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const time = clock.getElapsedTime();

    // 1. Rotation interpolation
    groupRef.current.rotation.x += rotationSpeed[0];
    groupRef.current.rotation.y += rotationSpeed[1];
    groupRef.current.rotation.z += rotationSpeed[2];

    // 2. Bobbing (vertical hover effect)
    const activeAmplitude = activeSection === "projects" ? bobAmplitude * 3 : bobAmplitude;
    const activeSpeed = activeSection === "projects" ? bobSpeed * 1.5 : bobSpeed;
    groupRef.current.position.y = initialY + Math.sin(time * activeSpeed) * activeAmplitude;
    
    // 3. React to section changes (Scale/intensity)
    const targetScale = activeSection === "services" ? scale * 1.05 : scale;
    groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.05)
    );
     
    // Sub-fragmenting / Facet opening (simulate 'exploding' in projects section)
    if (meshRef.current) {
        if (activeSection === "projects") {
             // Slowly grow the inner gem slightly more to break cage bounds subtly
             meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1.15, 0.03));
        } else {
             meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1.0, 0.05));
        }
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* The main solid/glassy body */}
      <mesh ref={meshRef} geometry={geometry} material={glassMaterial} />

      {/* The wireframe outline cage */}
      <lineSegments geometry={wireGeometry} material={lineMaterial} />

      {/* The vertex node dots */}
      {vertices.map((v, i) => (
        <mesh key={i} position={[v.x * 1.05, v.y * 1.05, v.z * 1.05]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <primitive object={dotMaterial} attach="material" />
        </mesh>
      ))}
    </group>
  );
}
