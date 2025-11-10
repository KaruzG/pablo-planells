import { useTranslations } from "next-intl";
import ProjectsList from "./ProjectsList";
import ProjectsHeader from "./ProjectsHeader";

const ProjectsSection = () => {
    const t = useTranslations('projects');

    return (
        <section className="bg-grey relative py-5 lg:py-15">
            <ProjectsHeader />
            <ProjectsList />
            <h2 className="text-center text-white text-l underline">{t('footer')}</h2>
        </section>
    )
}

export default ProjectsSection;