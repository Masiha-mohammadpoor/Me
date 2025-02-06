"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className={`${
          openMenu ? "bg-transparent" : "bg-white"
        } bg-opacity-60 w-10 h-10 rounded-md flex lg:hidden justify-center items-center fixed top-6 z-30`}
      >
        {openMenu ? (
          <IoClose className="text-[#FC00FF] w-7 h-7" />
        ) : (
          <BsThreeDots className="text-white w-7 h-7" />
        )}
      </button>
      <header
        className={`lg:w-[50rem] w-40 h-44 py-2 lg:py-0 lg:h-12 lg:rounded-full rounded-md lg:bg-white lg:bg-opacity-50 bg-gray-700 fixed top-6 z-20 mx-auto ${
          openMenu ? "flex" : "hidden lg:flex"
        } justify-between items-center px-2 shadow-md lg:shadow-none shadow-gray-600`}
      >
        <div className="w-full h-full  lg:flex justify-between items-center px-2">
          <div className="mb-2 lg:mb-0 flex flex-col gap-y-2 lg:flex-row items-start lg:items-center gap-x-5 text-white font-semibold lg:pl-4">
            <Link href="#aboutme" className="lg:text-white">
              About Me
            </Link>
            <Link href="#skills" className="lg:text-white">
              Skills
            </Link>
            <Link href="#portfolio" className="lg:text-white">
              Portfolio
            </Link>
            <Link href="#contact" className="lg:text-white">
              Contact
            </Link>
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
    </>
  );
};

export default Header;
