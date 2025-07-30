"use client"
import { useLoader } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Orbit } from './Orbit';

export const Room3d = () => {
    const gltf = useLoader(GLTFLoader, '/models/room.glb')
    return (
        <>
         <Canvas>
            <ambientLight intensity={1.5}  />
            <pointLight position={[10, 10, 10]} />
            <primitive object={gltf.scene} scale={0.6} rotation={[0, Math.PI / 2 + 3.9, 0]} />
            <Orbit />
         </Canvas>
        </>
    )
}