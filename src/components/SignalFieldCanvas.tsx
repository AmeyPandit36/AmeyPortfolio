"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferGeometry, Float32BufferAttribute, Points as PointsObject } from "three";

function ParticleCloud() {
  const points = useRef<PointsObject>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.25 + Math.random() * 2.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.48;
    }
    const nextGeometry = new BufferGeometry();
    nextGeometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return nextGeometry;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.035;
  });

  return <points ref={points} geometry={geometry}><pointsMaterial color="#70e0d0" size={0.018} sizeAttenuation transparent opacity={0.68} depthWrite={false} /></points>;
}

export default function SignalFieldCanvas() {
  return <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.25]} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}>
    <ParticleCloud />
  </Canvas>;
}
