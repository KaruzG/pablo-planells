import Link from "next/link";
import { FaInstagram, FaTiktok} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const SocialMedia = () => {
  return (
    <ul className="flex flex-row justify-center gap-6 mt-6 lg:justify-end">
      <li>
        <Link href="https://www.instagram.com/pablo_plga/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={50} />
        </Link>
      </li>
      <li>
        <Link href="https://www.tiktok.com/@pablo_plga" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={45} />
        </Link>
      </li>
      <li>
        <Link href="mailto:pablopla01@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail size={52} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;