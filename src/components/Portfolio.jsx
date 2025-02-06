"use client";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";

const Portfolio = ({ id , title , description , githubLink , projectLink}) => {

  return (
    <div
      data-aos={id % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-duration="2500"
      className="portfolio overflow-hidden relative z-0 col-span-6 md:col-span-3 rounded-lg transition-all p-[3px] bg-gray-700"
    >
      <div className="w-full h-full rounded-lg flex flex-col items-start justify-between gap-y-2 p-3 bg-gray-700">
        <h2 className="txt-gradiant font-bold text-xl">{title}</h2>
        <Link
          href={githubLink}
          target="_blank"
          className="flex items-center gap-x-2 link"
        >
          <FiGithub />
          github link
        </Link>
        <p className="text-white text-sm leading-6">{description}</p>
        <Link href={projectLink} target="_blank"><button className="neon-btn transition-all duration-300 flex items-center gap-x-2 text-secondary border-2 border-secondary p-2 rounded-lg">
          <HiOutlineEye /> see project
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
