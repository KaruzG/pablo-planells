import Image from "next/image";

const SubHeroImage = () => {
    return (
        <div className="w-96 md:w-[500px] mb-6">
            <Image layout="responsive" src="/images/subHeroPablo.png" height={300} width={300} alt="Photo of Pablo Sewing"></Image>
        </div>
    )
}

export default SubHeroImage;
