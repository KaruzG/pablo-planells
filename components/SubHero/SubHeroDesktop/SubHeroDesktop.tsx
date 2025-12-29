import SubHeroDesktopText from "./SubHeroDesktopText";
import SubHeroDesktopSlider from "./SubHeroDesktopSlider";
import Image from "next/image";
import placeHolder from "@public/images/placeholder.jpg";
import pabloPhoto from "@public/images/pabloSubHero.png";


const SubHeroDesktop = () => {
    return (
        <section className="flex flex-row p-5 mx-auto">
            <div className="flex flex-col relative items-end w-[60dvw] z-1 pl-10">
                <SubHeroDesktopText/>
            </div>
            <div className="w-[40dvw] z-0">
                <Image className="rounded-xl" src={pabloPhoto || placeHolder} width={750} height={750} alt="Photo of Pablo"></Image>
            </div>
        </section>
    )
}

export default SubHeroDesktop;