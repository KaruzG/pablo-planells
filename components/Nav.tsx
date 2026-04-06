"use client"
import Link from "next/link"
import {useTranslations} from 'next-intl';
import { rubikBubbles } from "@/fonts/fonts"; 
import { motion } from "framer-motion";
import { springDown } from "@/animations/onViewAnimations";
import { useState, useEffect } from "react";

const Nav = () => {
    const t = useTranslations('nav');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md py-1" : "bg-white-gradient py-0"
    }`;
    
    const listClass = `flex flex-row justify-around uppercase max-w-5xl mx-auto transition-all duration-300 ease-in-out ${
        scrolled ? "px-4 py-2" : "p-4 pt-6"
    }`;

    const listItemClass = `hover:font-bold hover:scale-105 transition-all duration-300 ${rubikBubbles.className} text-xl md:text-2xl ${
        scrolled ? "text-gray-900 drop-shadow-none" : "text-white drop-shadow-md"
    }`;

    return (
        <nav className={navClass}>
            <ul className={listClass}>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}><Link href="/proyects">{t('projects')}</Link></motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}><Link href="/">{t('home')}</Link></motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}><Link href="/contact">{t('contact')}</Link></motion.li>
            </ul>
        </nav>
    )
}

export default Nav