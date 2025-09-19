import { FaTelegramPlane, FaGithub, FaPhone } from "react-icons/fa";
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const skills = [
  {
    id: 1,
    title: "HTML",
    image: "/images/html.svg",
  },
  {
    id: 2,
    title: "CSS",
    image: "/images/css.svg",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/ts.svg",
  },
  {
    id: 5,
    title: "Sass",
    image: "/images/sass.svg",
  },
  {
    id: 6,
    title: "React.js",
    image: "/images/react.svg",
  },
  {
    id: 7,
    title: "Redux",
    image: "/images/redux.svg",
  },
  {
    id: 8,
    title: "Next.js",
    image: "/images/nextjs.svg",
  },
  {
    id: 9,
    title: "Tailwind",
    image: "/images/tailwind.svg",
  },
  {
    id: 10,
    title: "Git",
    image: "/images/git.svg",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Plantly",
    description:
      "A flower shop website built with Next.js (full-stack) .",
    githubLink: "https://github.com/Masiha-mohammadpoor/plantly",
    projectLink: "https://plantly-one.vercel.app/",
  },
  {
    id: 2,
    title: "Shopping",
    description:
      "A store site with user and admin panel and other features created with Next.js and Tailwind .",
    githubLink: "https://github.com/Masiha-mohammadpoor/nextjs-shopping",
    projectLink: "https://www.aparat.com/v/fdxa145",
  },
  {
    id: 3,
    title: "Panel Admin",
    description:
      "A static admin panel template with beautiful UI and various charts built with the help of Tailwind and MUI .",
    githubLink: "https://github.com/Masiha-mohammadpoor/berry-panel-admin",
    projectLink: "https://berry-panel-admin.vercel.app",
  },
  {
    id: 4,
    title: "Blogs App",
    description:
      "A program for blogs where you can read and comment on different blogs and publish your own blogs in different categories .",
    githubLink: "https://github.com/Masiha-mohammadpoor/blog-apps",
    projectLink: "https://www.aparat.com/v/dni9w45",
  },
  {
    id: 5,
    title: "Note App",
    description:
      "Notes app where you can write your notes as well as keep your private notes and specify your daily tasks .",
    githubLink: "https://github.com/Masiha-mohammadpoor/note-app",
    projectLink: "https://www.aparat.com/v/wii2k23",
  },
];

export const contact = [
  {
    id: 1,
    icon: <FaLocationDot className="text-white text-xl"/>,
    text: "Iran , Mazandaran",
  },
  {
    id: 2,
    icon: <FaPhone className="text-white text-xl"/>,
    text: "09113295810",
  },
  {
    id: 3,
    icon: <SiGmail className="text-white text-xl"/>,
    text: "masihmooohmmadpoor@gmail.com",
    link: "mailto:masihmooohmmadpoor@gmail.com",
  },
  {
    id: 4,
    icon: <FaLinkedin className="text-white text-xl"/>,
    text: "my linkedin",
    link: "http://www.linkedin.com/in/masiha-mohammadpour",
  },
  {
    id: 5,
    icon: <FaGithub className="text-white text-xl"/>,
    text: "my github",
    link: "https://github.com/Masiha-mohammadpoor",
  },
  {
    id: 6,
    icon: <FaTelegramPlane className="text-white text-xl"/>,
    text: "my telegram",
    link: "http://www.t.me/Masiha_dev",
  },
];
