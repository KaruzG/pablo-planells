"use client"
import { Canvas } from '@react-three/fiber';
import { CustomRotation } from './CustomRotation';
import { Room } from './Room';
import { motion } from 'motion/react';
import { fadeIn } from '@/animations/onRenderAnimations';

export const Room3d = () => {
    const fadeInAnimation = fadeIn({ delay: 0.5, duration: 1.5 });

    return (
        <motion.div className='w-full h-full' {...fadeInAnimation}>
         <Canvas className="touch-pan-y">
            <pointLight color="#ffecbd" intensity={110} position={[-2, 5, 5]} castShadow />
            <ambientLight color="ffffff" intensity={0.5} />
            <CustomRotation rotation={[0.6, 0, 0]} azimuth={[0, 1]}>
                <Room />
            </CustomRotation>
         </Canvas>
        </motion.div>
    )
}