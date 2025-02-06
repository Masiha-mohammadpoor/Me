import Link from "next/link";
import { FaTelegramPlane, FaGithub, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header className="lg:w-[50rem] lg:h-12 rounded-full bg-white bg-opacity-50 fixed top-6 z-20 mx-auto flex justify-between items-center px-2">
      <div className="w-full hidden lg:flex justify-between items-center px-2">
      <div className="flex items-center gap-x-5 text-white font-semibold pl-4">
      <Link href="#aboutme">About Me</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#portfolio">Portfolio</Link>
      <Link href="#contact">Contact</Link>
      </div>
      <div className="flex gap-x-3">
        <Link
          target="_blank"
          href="http://www.linkedin.com/in/masiha-mohammadpour"
        >
          <FaLinkedin className="text-white w-8 h-8" />
        </Link>
        <Link target="_blank" href="https://github.com/Masiha-mohammadpoor">
          <FaGithub className="text-white w-8 h-8" />
        </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
