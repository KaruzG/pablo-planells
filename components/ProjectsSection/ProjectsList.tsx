import Image from "next/image";

const ProjectsList = () => {
  return (
    <ul className="flex flex-wrap lg:gap-15 gap-5 justify-center py-10">
      <li><Image className="bg-white rounded-3xl" src="/images/JACKET 1.png" alt="Jacket" width={300} height={500}></Image></li>
      <li><Image className="bg-white rounded-3xl" src="/images/JACKET 2.png" alt="Jacket" width={300} height={500}></Image></li>
      <li><Image className="bg-white rounded-3xl" src="/images/TOTE 1.png" alt="Jacket" width={300} height={500}></Image></li>
    </ul>
  )
};

export default ProjectsList;