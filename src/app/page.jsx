"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Skill from "@/components/Skill";
import { portfolio, skills } from "../../data/data";
import Portfolio from "@/components/Portfolio";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Contact from "@/components/Contact";
import { GoDownload } from "react-icons/go";

const NeonLamp = dynamic(() => import("@/components/NeonLamp"), { ssr: false });
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);

  const handleDownload = () => {
    window.open("/files/resume.pdf", "_blank");
  };

  return (
    <main className="overflow-x-hidden">
      <section className="w-screen h-[34rem] main-bg overflow-hidden mb-32">
        <section className="w-full h-full main-bg-2 flex flex-col gap-y-5 items-center pt-32">
          <div className="w-40 h-40 rounded-full bg-black overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="profile"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <h3 className="sm:text-2xl text-lg font-semibold text-white px-3 py-1 rounded-full reverse-bg">
            I'm Masiha Mohammadpour
          </h3>
          <h4 className="text-lg font-semibold text-white">
            Front-end Developer
          </h4>
          <div>
            <TypeAnimation
              sequence={[
                "Design it simple, code it smart .",
                2000,
                "Transforming ideas into interfaces .",
                2000,
              ]}
              wrapper="h3"
              speed={50}
              style={{
                fontSize: "1rem",
                display: "block",
                color: "#fff",
              }}
              repeat={Infinity}
            />
          </div>
          <button
            onClick={handleDownload}
            className="reverse-bg py-2 px-3 rounded-full animate-bounce mt-4 flex justify-center gap-x-2 text-white"
          >
            Resume <GoDownload className="text-white text-2xl " />
          </button>
        </section>
      </section>

      <section className="w-screen flex flex-col items-center gap-y-10 mb-32">
        <NeonLamp text="About Me" id="aboutme" />
        <p
          className="w-screen md:w-[40rem] text-white text-justify leading-8 text-sm px-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Hi , I'm Masiha Mohammadpour , I am 18 . I am a front-end developer
          and have been learning for about 2 years, I am also interested in
          learning new tools and experiencing new challenges. I use the
          JavaScript library, React.js , and its framework, Next.js , And I also
          have a lot of knowledge in libraries and their tools, such as redux,
          redux-toolkit, formik, ... . I also use different styling tools like
          Tailwind.
          <br /> You can see part of my portfolio and codes in my{" "}
          <Link
            target="_blank"
            href="https://github.com/Masiha-mohammadpoor"
            className="link"
          >
            GitHub account
          </Link>
          .
        </p>
      </section>
      <section className="w-screen flex flex-col items-center gap-y-10 mb-32">
        <NeonLamp text="Skills" id="skills" />
        <div className="w-screen md:w-[45rem] grid grid-cols-10 gap-7 px-4">
          {skills.map((s) => {
            return <Skill key={s.id} id={s.id} src={s.image} title={s.title} />;
          })}
        </div>
      </section>
      <section className="w-screen flex flex-col items-center gap-y-10 mb-32">
        <NeonLamp text="Portfolio" id="portfolio" />
        <div className="w-screen lg:w-[55rem] grid grid-cols-6 gap-7 px-4">
          {portfolio.map((p) => {
            return <Portfolio key={p.id} {...p} />;
          })}
        </div>
      </section>
      <section className="w-screen flex flex-col items-center gap-y-10 mb-32">
        <NeonLamp text="Contact" id="contact" />
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-screen md:w-[50rem] flex justify-between items-center px-4"
        >
          <Contact />
          <Image
            src="/images/social.svg"
            alt="social"
            width={300}
            height={300}
            className="svg hidden md:block"
          />
        </div>
      </section>
    </main>
  );
}
