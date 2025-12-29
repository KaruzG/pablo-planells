import Image from "next/image";
import placeHolder from "@public/images/placeholder.jpg";

const SubHeroDesktopSlider = () => {
    return (
        <div className="flex flex-row justify-around w-[55vw] z-10 bg-background rounded-2xl p-4 mt-3 ml-5">
            <Image src={placeHolder} width={250} height={250} alt="Photo of Pablo"></Image>
            <Image src={placeHolder} width={250} height={250} alt="Photo of Pablo"></Image>
            <Image src={placeHolder} width={250} height={250} alt="Photo of Pablo"></Image>
            <Image src={placeHolder} width={250} height={250} alt="Photo of Pablo"></Image>
        </div>
    )
}

export default SubHeroDesktopSlider;