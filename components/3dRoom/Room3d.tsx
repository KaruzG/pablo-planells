"use client"
import { Canvas } from '@react-three/fiber';
import { Orbit } from './Orbit';
import { Room } from './Room';
import { motion } from 'motion/react';
import { fadeIn } from '@/animations/onRenderAnimations';

export const Room3d = () => {
    const fadeInAnimation = fadeIn({ delay: 0.5, duration: 1.5 });

    return (
        <motion.div className='w-full h-full' {...fadeInAnimation}>
         <Canvas>
            <pointLight color="#ffecbd" intensity={110} position={[-2, 5, 5]} castShadow />
            <ambientLight color="ffffff" intensity={0.5} />
            <Room />
            <Orbit />
         </Canvas>
        </motion.div>
    )
}