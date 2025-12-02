import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsList = () => {
  return (
    <ul className="flex flex-wrap lg:gap-15 gap-5 justify-center py-10">
      <li><ProjectCard className="bg-white rounded-3xl" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-3xl" imgSrc="/images/JACKET 1.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      <li><ProjectCard className="bg-white rounded-3xl" imgSrc="/images/TOTE 1.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
    </ul>
  )
};

export default ProjectsList;