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
    <div className="relative w-full group">
      <button 
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 md:p-3 rounded-full shadow-lg text-black hover:bg-white transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Scroll left"
      >
        <FaChevronLeft size={20} />
      </button>

      <ul 
        ref={scrollContainerRef}
        className="flex flex-row snap-x snap-mandatory lg:gap-15 gap-5 pl-5 md:pl-15 pr-5 justify-start py-10 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
        <li className="snap-center"><ProjectCard className="bg-white rounded-xl min-w-3xs md:min-w-xs" imgSrc="/images/JACKET 2.png" width={300} height={300} altText="Jacket"></ProjectCard></li>
      </ul>

      <button 
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 md:p-3 rounded-full shadow-lg text-black hover:bg-white transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Scroll right"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  )
};

export default ProjectsList;