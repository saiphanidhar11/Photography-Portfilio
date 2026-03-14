import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Camera body — realistic DSLR shape built from primitives
function CameraBody() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    }
  });

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c9a84c',
    metalness: 0.9,
    roughness: 0.15,
    envMapIntensity: 1.5,
  }), []);

  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#111111',
    metalness: 0.7,
    roughness: 0.3,
    envMapIntensity: 1.0,
  }), []);

  const darkMetal = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0a0a1a',
    metalness: 0.1,
    roughness: 0.0,
    transparent: true,
    opacity: 0.85,
    envMapIntensity: 2.0,
  }), []);

  const lensMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#222222',
    metalness: 0.9,
    roughness: 0.1,
  }), []);

  return (
    <group ref={groupRef}>
      {/* Main camera body */}
      <mesh material={bodyMaterial} position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 2.0, 1.4]} />
      </mesh>

      {/* Top grip hump */}
      <mesh material={bodyMaterial} position={[0.9, 1.1, 0]}>
        <boxGeometry args={[1.0, 0.6, 1.4]} />
      </mesh>

      {/* Viewfinder bump */}
      <mesh material={bodyMaterial} position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.6]} />
      </mesh>

      {/* Grip rubber */}
      <mesh material={darkMetal} position={[1.2, 0, 0.71]}>
        <boxGeometry args={[0.5, 1.8, 0.05]} />
      </mesh>

      {/* Gold trim top */}
      <mesh material={goldMaterial} position={[0, 1.02, 0]}>
        <boxGeometry args={[2.82, 0.06, 1.42]} />
      </mesh>

      {/* Gold trim bottom */}
      <mesh material={goldMaterial} position={[0, -1.02, 0]}>
        <boxGeometry args={[2.82, 0.06, 1.42]} />
      </mesh>

      {/* Lens mount ring (gold) */}
      <mesh material={goldMaterial} position={[-0.3, 0, 0.72]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.72, 0.06, 16, 48]} />
      </mesh>

      {/* Lens barrel outer */}
      <mesh material={lensMaterial} position={[-0.3, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.78, 1.0, 32]} />
      </mesh>

      {/* Lens barrel middle ring */}
      <mesh material={goldMaterial} position={[-0.3, 0, 1.62]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.74, 0.74, 0.08, 32]} />
      </mesh>

      {/* Lens barrel front */}
      <mesh material={lensMaterial} position={[-0.3, 0, 2.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.72, 0.6, 32]} />
      </mesh>

      {/* Lens glass element */}
      <mesh material={glassMaterial} position={[-0.3, 0, 2.41]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.04, 48]} />
      </mesh>

      {/* Inner lens reflection circle */}
      <mesh position={[-0.3, 0, 2.44]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.01, 32]} />
        <meshStandardMaterial color="#1a2040" metalness={0.1} roughness={0} transparent opacity={0.9} />
      </mesh>

      {/* Shutter button (gold) */}
      <mesh material={goldMaterial} position={[0.8, 1.12, 0.3]}>
        <cylinderGeometry args={[0.12, 0.14, 0.12, 20]} />
      </mesh>

      {/* Mode dial */}
      <mesh material={darkMetal} position={[-0.2, 1.12, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.15, 12]} />
      </mesh>

      {/* Mode dial gold ring */}
      <mesh material={goldMaterial} position={[-0.2, 1.19, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.025, 8, 12]} />
      </mesh>

      {/* Hot shoe (gold) */}
      <mesh material={goldMaterial} position={[0, 1.24, 0.15]}>
        <boxGeometry args={[0.7, 0.04, 0.35]} />
      </mesh>

      {/* Back LCD screen */}
      <mesh position={[0, 0, -0.72]}>
        <boxGeometry args={[2.0, 1.5, 0.04]} />
        <meshStandardMaterial color="#050510" metalness={0.2} roughness={0.1} />
      </mesh>

      {/* LCD screen gold border */}
      <mesh material={goldMaterial} position={[0, 0, -0.73]}>
        <boxGeometry args={[2.1, 1.6, 0.02]} />
      </mesh>

      {/* Strap lug left */}
      <mesh material={goldMaterial} position={[-1.46, 0.7, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.5]} />
      </mesh>

      {/* Strap lug right */}
      <mesh material={goldMaterial} position={[1.46, 0.7, 0]}>
        <boxGeometry args={[0.1, 0.3, 0.5]} />
      </mesh>

      {/* Ambient particles around camera */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 2.2 + Math.sin(i * 1.3) * 0.5;
        const y = Math.cos(i * 0.8) * 1.2;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.025 + Math.random() * 0.03, 8, 8]} />
            <meshStandardMaterial color="#c9a84c" emissive="#c9a84c" emissiveIntensity={1.5} />
          </mesh>
        );
      })}
    </group>
  );
}

function CameraScene() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8} scale={1.5}>
      <CameraBody />
    </Float>
  );
}

export default function Camera3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#c9a84c" />
      <pointLight position={[-5, -3, -5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={1.5} color="#e8c96a" />
      <spotLight
        position={[3, 5, 3]}
        angle={0.4}
        penumbra={0.5}
        intensity={3}
        color="#c9a84c"
        castShadow
      />
      <Environment preset="night" />
      <CameraScene />
    </Canvas>
  );
}
