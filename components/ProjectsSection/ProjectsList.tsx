import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <ul className="flex flex-row lg:gap-15 gap-5 pl-5 md:pl-15 pr-5 justify-start py-10 overflow-x-scroll">
      <li><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
    </ul>
  )
};

export default ProjectsList;