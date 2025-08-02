"use client"
import { Canvas } from '@react-three/fiber';
import { Orbit } from './Orbit';
import { Room } from './Room';

export const Room3d = () => {
    return (
        <>
         <Canvas>
            <pointLight color="#ffecbd" intensity={110} position={[-2, 5, 5]} castShadow />
            <ambientLight color="ffffff" intensity={0.5} />
            <Room />
            <Orbit />
         </Canvas>
        </>
    )
}