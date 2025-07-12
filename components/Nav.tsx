"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const styles = {
    nav: "bg-white-gradient",
    list: "flex flex-row justify-around p-4 uppercase max-w-5xl mx-auto pt-6",
    listItem: "hover:font-bold hover:scale-105 hover:text-blue transition-all duration-200",
}

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? {fontWeight: "bold", scale: 1, cursor: "default"} : undefined;

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.listItem} style={isActive("/")}><Link href="/">Home</Link></li>
                <li className={styles.listItem} style={isActive("/about")}><Link href="/about">About</Link></li>
                <li className={styles.listItem} style={isActive("/contact")}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav