import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function AnimationBoy() {
  return (
    <div className='ANIMATION-BOY h-screen'>
      <Canvas mode='concurrent' camera={{ position: [1, 1.5, 3.5], fov: 50 }}>
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, -1, 0]}>
          <Suspense fallback={'loading'}>
            <Model />
          </Suspense>
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
