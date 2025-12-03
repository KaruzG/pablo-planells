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
              <div className="space-y-4 pt-7">
            <h2 className="text-2xl font-bold">
              {params.projectTitle || "Título del Proyecto"}
            </h2>
            
            <div className="relative w-full h-96">
              <Image
                src={params.imgSrc || placeHolder}
                alt={params.altText || "Image without alt text"}
                fill
                className="object-contain"
              />
            </div>
            
            <p className="text-gray-700">
              {params.projectDescription || "Descripción del proyecto..."}
            </p>
          </div>
  )

  return (
    <>
      <Image
        className={`${params.className} cursor-pointer hover:opacity-90 transition-opacity`}
        src={params.imgSrc || placeHolder}
        alt={params.altText || "Image without alt text"}
        width={params.width}
        height={params.height}
        onClick={openModal}
      />

      <Modal isOpen={isOpen} onClose={closeModal}>
        {params.modalContent || ( fallbackContent )}
      </Modal>
    </>
  );
};

export default ProjectCard;