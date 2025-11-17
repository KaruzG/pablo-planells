import Link from "next/link";
import { FaInstagram, FaTiktok} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type Props = {
  size?: "sm" | "md" | "lg";
};


const SocialMedia = ( params:Props ) => {
  let iconSize = {instagram: 50, tiktok: 45, email: 52};

  switch (params?.size) {
    case "sm":
      iconSize = {instagram: 30, tiktok: 25, email: 32};
      break;
    case "md":
      iconSize = {instagram: 40, tiktok: 35, email: 42};
      break;
    case "lg":
      iconSize = {instagram: 50, tiktok: 45, email: 52};
      break;
    }

  return (
    <ul className="flex flex-row justify-center gap-6 lg:justify-end">
      <li>
        <Link href="https://www.instagram.com/pablo_plga/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={iconSize.instagram} />
        </Link>
      </li>
      <li>
        <Link href="https://www.tiktok.com/@pablo_plga" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={iconSize.tiktok} />
        </Link>
      </li>
      <li>
        <Link href="mailto:pablopla01@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail size={iconSize.email} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;