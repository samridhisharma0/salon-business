"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Vector3, BufferGeometry, Float32BufferAttribute, Points, Mesh } from "three";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function FloatingShape({ position, color, size, speed }: { position: [number, number, number]; color: string; size: number; speed: number }) {
  const meshRef = useRef<Mesh>(null);
  const pos = useMemo(() => new Vector3(...position), [position]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.5) * 0.3;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * speed * 0.3) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={pos}>
        <torusKnotGeometry args={[size, size * 0.3, 64, 8]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function ParticlePoints() {
  const ref = useRef<Points>(null);
  const count = 200;
  const rand = useMemo(() => seededRandom(42), []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 20;
      pos[i * 3 + 1] = (rand() - 0.5) * 20;
      pos[i * 3 + 2] = (rand() - 0.5) * 20;
      col[i * 3] = 201 / 255;
      col[i * 3 + 1] = 169 / 255;
      col[i * 3 + 2] = 110 / 255;
    }
    return [pos, col];
  }, [rand]);

  const geom = useMemo(() => {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(positions, 3));
    g.setAttribute("color", new Float32BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-[1] opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <FloatingShape position={[-2, 1, 0]} color="#c9a96e" size={0.6} speed={0.5} />
        <FloatingShape position={[3, -1.5, -2]} color="#dfc28e" size={0.4} speed={0.7} />
        <FloatingShape position={[-1, -2, -3]} color="#a88a4e" size={0.3} speed={0.4} />
        <FloatingShape position={[1.5, 2.5, -1]} color="#c9a96e" size={0.5} speed={0.6} />
        <ParticlePoints />
      </Canvas>
    </div>
  );
}
