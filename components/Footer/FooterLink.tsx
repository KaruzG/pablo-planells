import React from "react";
import Link from "next/link";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link className="hover:text-gray-300 transition-colors w-fit group flex items-center gap-2" href={href}>
        <span className="h-[1px] w-0 bg-white group-hover:w-4 transition-all duration-300"></span>
        {children}
    </Link>
);

export default FooterLink;
