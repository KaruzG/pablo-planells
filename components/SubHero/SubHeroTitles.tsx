"use client"

import SocialMedia from "../SocialMedia";
import { rubikMonoOne, rubik } from "@/fonts/fonts";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { springRight } from "@/animations/onViewAnimations";

const SubHeroTitles = () => {
    const t = useTranslations('subhero')
    return (
        <div className="lg:max-w-xl xl:max-w-2xl">
            <motion.div viewport={{ once: true }} {...springRight}>
                <h1 className={`${rubikMonoOne.className} text-4xl text-center tracking-tighter md:text-6xl lg:text-right xl:text-8xl`}>{t("header")}</h1>
                <h2 className={`${rubik.className} text-2xl text-center tracking-tight md:text-4xl lg:text-right mb-6`}>{t("header2")}</h2>
            </motion.div>
            <SocialMedia animation={true} className="lg:justify-end gap-6 justify-center" size="lg" />
        </div>
    )
}
export default SubHeroTitles;