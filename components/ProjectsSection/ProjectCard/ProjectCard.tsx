"use client"

import Image from "next/image";
import placeHolder from "@public/images/placeholder.jpg";
import Modal from "@components/Modal";
import { useModal } from "@hooks/useModal";

type Props = {
  className?: string;
  imgSrc?: string;
  altText?: string;
  width: number;
  height: number;
  modalContent?: React.ReactNode;
  projectTitle?: string;
  projectDescription?: string;
};

const ProjectCard = (params: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const fallbackContent = (
    <div className="flex flex-col md:flex-row min-h-[60vh] md:min-h-[70vh]">
      {/* Image Panel */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full bg-gray-50 flex items-center justify-center p-8">
        <Image
          src={params.imgSrc || placeHolder}
          alt={params.altText || "Project Image"}
          fill
          className="object-contain p-4 drop-shadow-xl"
        />
      </div>
      
      {/* Content Panel */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 font-serif">
          {params.projectTitle || "Project Title"}
        </h2>
        
        <div className="w-12 h-1 bg-brown mb-8 rounded-full"></div>
        
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          {params.projectDescription || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      </div>
    </div>
  )

  return (
    <>
      <div 
        className={`${params.className} group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-white`}
        onClick={openModal}
      >
        <Image
          className="transition-transform duration-700 ease-in-out group-hover:scale-110 object-cover"
          src={params.imgSrc || placeHolder}
          alt={params.altText || "Image without alt text"}
          width={params.width}
          height={params.height}
        />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {params.modalContent || ( fallbackContent )}
      </Modal>
    </>
  );
};

export default ProjectCard;