"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import {useTranslations} from 'next-intl';
import { rubikBubbles } from "@/fonts/fonts"; 

const styles = {
    nav: `bg-white-gradient fixed top-0 left-0 w-full z-50`,
    list: "flex flex-row justify-around p-4 uppercase max-w-5xl mx-auto pt-6",
    listItem: `hover:font-bold hover:scale-105 transition-all duration-200 ${rubikBubbles.className} text-xl md:text-2xl text-white text-shadow-md`,
};

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? {fontWeight: "bold", scale: 1, cursor: "default"} : undefined;
    const t = useTranslations('nav');

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.listItem} style={isActive("/proyects")}><Link href="/proyects">{t('projects')}</Link></li>
                <li className={styles.listItem} style={isActive("/")}><Link href="/">{t('home')}</Link></li>
                <li className={styles.listItem} style={isActive("/contact")}><Link href="/contact">{t('contact')}</Link></li>
            </ul>
        </nav>
    )
}

export default Nav