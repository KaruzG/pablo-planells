import Image from "next/image";
import placeHolder from "@public/images/placeholder.jpg";

type Props = {
  className?: string;
  imgSrc?: string
  altText?: string;
  width: number;
  height: number;
}

const ProjectCard = (params: Props) => {
    return (
        <Image 
        className={params.className} 
        src={params.imgSrc ? params.imgSrc : placeHolder} 
        alt={params.altText ? params.altText : "Image without alt text"} 
        width={params.width} 
        height={params.height}>
        </Image>
    )
}

export default ProjectCard;