import { useTranslations } from "next-intl";
import SocialMedia from "../SocialMedia"
import logo from "@/public/resources/logo.svg";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import FooterLink from "./FooterLink";

const FooterBody = () => {
    const tnav = useTranslations('nav');

    return (
        <section className="flex flex-col-reverse md:flex-row md:max-w-5xl md:mx-auto md:w-full md:justify-between items-center gap-12 md:gap-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <SectionTitle>Social Media</SectionTitle>
                    <SocialMedia className="gap-4" size="sm"/>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <SectionTitle>Pages</SectionTitle>
                    <div className="flex flex-col gap-3">
                        <FooterLink href="/proyects">{tnav('projects')}</FooterLink>
                        <FooterLink href="/">{tnav('home')}</FooterLink>
                        <FooterLink href="/contact">{tnav('contact')}</FooterLink>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Image src={logo} height={100} alt="Logo" className="opacity-90 hover:opacity-100 transition-opacity duration-300" />
            </div>
        </section>
    )
}

export default FooterBody