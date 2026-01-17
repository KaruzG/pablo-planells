"use client"

import { rubikBubbles } from "@/fonts/fonts";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import ContactMedia from "./ContactMedia";
import { motion } from "motion/react";
import { springUp } from "@/animations/onViewAnimations";


export const ContactSection = () => {
    const t = useTranslations('contact');
    
    return (
        <section className={`flex flex-col relative items-center justify-center px-2 h-screen bg-size-[auto_600px] md:bg-size-[auto_1100px] bg-top-left md:bg-center bg-[url('/images/cloudBG.webp')]`}>
            <h2 className={`${rubikBubbles.className} text-5xl md:text-7xl text-white text-shadow-md`}>{t('title')}</h2>
            <motion.div viewport={{ once: true, amount: "some",  margin: "0px 0px 500px 0px"}} { ...springUp } className={`flex flex-row items-center justify-center w-full sm:max-w-2/3 lg:max-w-1/2 min-w-1/2 min-h-2/4 m-19 bg-white rounded-xl shadow-lg px-2 py-2`}>
                <ContactForm className="w-1/2 pr-1 py-1 md:px-3"/>
                <ContactMedia />
            </motion.div>
        </section>
    );
}