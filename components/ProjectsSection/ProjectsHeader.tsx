import { useTranslations } from "next-intl";

const ProjectsHeader = () => {
    const t = useTranslations('projects');
    
    return (
        <h1 className="absolute top-[-8px] text-white text-3xl text-center font-extrabold w-full mt-0">{t('header1') + '·' + t('header2') + '·' + t('header3')}</h1>
    )
}

export default ProjectsHeader;