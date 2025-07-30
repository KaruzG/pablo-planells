"use client"
import { Canvas } from '@react-three/fiber';
import { Orbit } from './Orbit';
import { Room } from './Room';

export const Room3d = () => {
    return (
        <>
         <Canvas>
            <ambientLight intensity={1.5}  />
            <pointLight position={[10, 10, 10]} />
            <Room />
            <Orbit />
         </Canvas>
        </>
    )
}