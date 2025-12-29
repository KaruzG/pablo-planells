import SocialMedia from "@/components/SocialMedia";
import { rubikMonoOne } from "@/fonts/fonts";


interface Props {
    className?: string;
}

const SubHeroDesktopText = ( params:Props ) => {
    return (
        <div className={params.className + " " + rubikMonoOne + " flex flex-col items-end justify-center mt-5 ml-10 pr-8"}>
            <h1 className="text-8xl font-extrabold">PABLO PLANELLS</h1>
            <h2 className="text-5xl font-bold">DISEÑADOR PATRONADOR</h2>
            <SocialMedia className="my-8 mr-10 gap-9" size="lg"/>
        </div>
    )
}

export default SubHeroDesktopText;