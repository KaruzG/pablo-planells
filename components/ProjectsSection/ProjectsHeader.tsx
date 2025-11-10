import { rubikMonoOne } from "@/fonts/fonts";
import { useTranslations } from "next-intl";

const ProjectsHeader = () => {
    const t = useTranslations('projects');
    
    return (
        <h1 className={`${rubikMonoOne} flex justify-between md:px-10 px-2 absolute top-[-8px] lg:top-[-11px] text-white text-2xl sm:text-5xl lg:text-7xl text-center font-extrabold w-full mt-0`}>
            <span>{t("header1")}</span>
            <span>·</span>
            <span>{t("header2")}</span>
            <span>·</span>
            <span>{t("header3")}</span>
        </h1>
    )
}

export default ProjectsHeader;