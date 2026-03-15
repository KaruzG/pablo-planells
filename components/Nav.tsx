"use client"
import Link from "next/link"
import {useTranslations} from 'next-intl';
import { rubikBubbles } from "@/fonts/fonts"; 
import { motion } from "framer-motion";
import { springDown } from "@/animations/onViewAnimations";

const styles = {
    nav: `bg-white-gradient absolute top-0 left-0 w-full z-50`,
    list: "flex flex-row justify-around p-4 uppercase max-w-5xl mx-auto pt-6",
    listItem: `hover:font-bold hover:scale-105 transition-all duration-200 ${rubikBubbles.className} text-xl md:text-2xl text-white text-shadow-md`,
};

const Nav = () => {
    const t = useTranslations('nav');

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={styles.listItem}><Link href="/proyects">{t('projects')}</Link></motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={styles.listItem}><Link href="/">{t('home')}</Link></motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={styles.listItem}><Link href="/contact">{t('contact')}</Link></motion.li>
            </ul>
        </nav>
    )
}

export default Nav