"use client"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Canvas } from '@react-three/fiber';

export const Room3d = () => {
    const gltf = useLoader(GLTFLoader, '/models/room.glb')
    return (
        <>
         <Canvas>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} />
            <primitive object={gltf.scene} scale={0.6} rotation={[0.3, Math.PI / 2 + 3.9, 0]} />
         </Canvas>
        </>
    )
}