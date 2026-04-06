"use client"
import Link from "next/link"
import {useTranslations} from 'next-intl';
import { rubikBubbles } from "@/fonts/fonts"; 
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

    const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-1" : "bg-white-gradient py-0"
    }`;
    
    // Al usar un grid de 3 columnas el del medio se queda 100% centrado siempre garantizado.
    const listClass = `grid grid-cols-3 items-center w-full uppercase mx-auto transition-all duration-500 ease-in-out ${
        scrolled ? "max-w-xs sm:max-w-md md:max-w-lg px-4 py-2" : "max-w-5xl p-4 pt-6"
    }`;

    // justify-self-center asegura que el botón se ajuste y se centre en su trozo de columna
    const listItemClass = `justify-self-center hover:font-bold hover:scale-105 transition-all duration-500 ${rubikBubbles.className} text-xl md:text-2xl ${
        scrolled ? "text-gray-900 drop-shadow-none" : "text-white drop-shadow-md"
    }`;

    return (
        <nav className={navClass}>
            <ul className={listClass}>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}><Link href="/proyects">{t('projects')}</Link></motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}>
                    <Link href="/" className="relative flex justify-center items-center overflow-visible">
                        {/* Texto oculto para mantener las dimensiones evitando saltos del layout */}
                        <span className="invisible whitespace-nowrap">{t('home')}</span>
                        
                        <AnimatePresence initial={false}>
                            {scrolled ? (
                                <motion.div
                                    key="logo"
                                    initial={{ y: -40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="absolute inset-0 flex justify-center items-center"
                                >
                                    {/* Asegúrate de que favicon.svg esté en public/images/ */}
                                    <Image src="/images/favicon.svg" alt="Pablo Planells Logo" width={34} height={34} className="drop-shadow-sm object-contain" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="text"
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="absolute inset-0 flex justify-center items-center whitespace-nowrap"
                                >
                                    {t('home')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Link>
                </motion.li>
                <motion.li viewport={{ once: true, margin: "2000px 0px 0px 0px" }} {...springDown} className={listItemClass}><Link href="/contact">{t('contact')}</Link></motion.li>
            </ul>
        </nav>
    )
}

export default Nav