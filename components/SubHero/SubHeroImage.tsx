import Image from "next/image";
import pabloSubHero from "@public/images/pabloSubHero.png";

const SubHeroImage = () => {
    return (
        <div className="w-96 md:w-[500px] mb-6">
            <Image className="rounded-2xl" layout="responsive" src={pabloSubHero} height={300} width={300} alt="Photo of Pablo Sewing"></Image>
        </div>
    )
}

export default SubHeroImage;
