import SubHeroImage from "./SubHeroImage";
import SubHeroTitles from "./SubHeroTitles";

const SubHeroSection = () => {
    return (
        <section className="flex flex-col py-[10%] px-2 items-center lg:flex-row-reverse lg:justify-center lg:gap-8 xl:px-10">
            <SubHeroImage />
            <SubHeroTitles />
        </section>
    )
}

export default SubHeroSection;