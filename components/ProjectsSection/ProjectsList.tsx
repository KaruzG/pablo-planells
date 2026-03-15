"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsList = () => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // scroll about one card width
      const scrollAmount = 350; 
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full group/list mx-auto">
      <button 
        onClick={() => scroll("left")}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/60 p-3 md:p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer opacity-0 group-hover/list:opacity-100 focus:opacity-100"
        aria-label="Scroll left"
      >
        <FaChevronLeft size={20} />
      </button>

      <ul 
        ref={scrollContainerRef}
        className="flex flex-row snap-x snap-mandatory lg:gap-12 gap-6 justify-start py-12 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        <li className="shrink-0 w-4 md:w-12"></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="snap-center drop-shadow-lg shrink-0"><ProjectCard className="w-[300px] h-[350px]" imgSrc="/images/JACKET 2.png" width={300} height={350} altText="Jacket" projectTitle="Urban Jacket"></ProjectCard></li>
        <li className="shrink-0 w-4 md:w-12"></li>
      </ul>

      <button 
        onClick={() => scroll("right")}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/60 p-3 md:p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 text-gray-800 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer opacity-0 group-hover/list:opacity-100 focus:opacity-100"
        aria-label="Scroll right"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  )
};

export default ProjectsList;