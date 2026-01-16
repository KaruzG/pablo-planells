"use client"

import Image from "next/image";
import { motion } from "motion/react"
import pabloSubHero from "@public/images/pabloSubHero.png";
import { springLeft } from "@/animations/onViewAnimations";

const SubHeroImage = () => {
    
    return (
        <motion.div viewport={{ once: true }} { ...springLeft } className="w-96 md:w-[500px] mb-6">
            <Image className="rounded-2xl" layout="responsive" src={pabloSubHero} height={300} width={300} alt="Photo of Pablo Sewing"></Image>
        </motion.div>
    )
}

export default SubHeroImage;
