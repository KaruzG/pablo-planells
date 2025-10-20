import { rubikBubbles } from "@/fonts/fonts";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import ContactMedia from "./ContactMedia";


export const ContactSection = () => {
    const t = useTranslations('contact');
    
    return (
        <section className={`flex flex-col relative items-center justify-center h-screen bg-size-[auto_600px] md:bg-size-[auto_1100px] bg-top-left md:bg-center bg-[url('/images/cloudBG.webp')]`}>
            <h2 className={`${rubikBubbles.className} text-5xl md:text-7xl text-white text-shadow-md`}>{t('title')}</h2>
            <div className={`flex flex-row items-center justify-center max-w-full md:max-w-2/3 lg:max-w-1/2 min-w-1/2 h-2/3 m-19 bg-white rounded-xl shadow-lg px-2 py-2`}>
                <ContactForm className="w-1/2 px-8"/>
                <ContactMedia />
            </div>
        </section>
    );
}