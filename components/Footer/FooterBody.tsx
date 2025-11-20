import { useTranslations } from "next-intl";
import SocialMedia from "../SocialMedia"
import Link from "next/link"
import logo from "@/public/resources/logo.svg";
import Image from "next/image";

const FooterBody = () => {
    const tnav = useTranslations('nav');

    return (
        <section className="flex flex-row md:max-w-2/3 md:mx-auto md:justify-between md:gap-40 lg:gap-70">
            <div>
                <ul className="flex flex-col gap-6 mb-10">
                    <li className="flex flex-col justify-items-start">
                        <p className="text-xl italic mb-2 capitalize">social Media</p>
                        <SocialMedia className="gap-2 pl-1" size="sm"/>
                    </li>
                    <li className="flex flex-col">
                        <p className="italic text-xl mb-1 capitalize">pages</p>
                        <Link className="underline pl-2" href="/proyects">{tnav('projects')}</Link>
                        <Link className="underline pl-2" href="/">{tnav('home')}</Link>
                        <Link className="underline pl-2" href="/contact">{tnav('contact')}</Link>
                    </li>
                </ul>
            </div>
            <div className="flex mx-auto">
                <Image src={logo} height={120} alt="Logo" />
            </div>
        </section>
    )
}

export default FooterBody