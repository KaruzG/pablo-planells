import logo from "@/public/resources/logo.svg";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { Suspense } from 'react';

const ContactMedia = () => {
  const t = useTranslations('contact');

  return (
    <div className={`flex flex-col relative justify-end p-7 w-1/2 h-full text-white rounded-md z-0`}>
      <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse rounded-md"></div>}>
        <video muted autoPlay loop className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-[-1]">
          <source src="/resources/recap.mp4" type="video/mp4" />
        </video>
      </Suspense>
        <div className="flex flex-col gap-4 text-shadow-lg/20">
            <p className="mt-auto font-bold text-md leading-4.5">{t('description')}</p>
            <div className="flex flex-row h-fit justify-between flex-1/2 items-end">
                <p className="flex flex-col font-bold">Pablo Planells <span className="font-normal text-sm">{t('role')}</span></p>
                <Image src={logo} height={40} alt="Logo" />
            </div>
        </div>
    </div>
  )
};

export default ContactMedia;
