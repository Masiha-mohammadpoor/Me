"use client";
import { HiArrowDown } from "react-icons/hi2";
import dynamic from "next/dynamic";
import Link from "next/link";

const NeonLamp = dynamic(() => import("@/components/NeonLamp"), { ssr: false });
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <section className="w-screen h-[34rem] main-bg overflow-hidden mb-32">
        <section className="w-full h-full main-bg-2 flex flex-col gap-y-5 items-center pt-32">
          {/* image */}
          <div className="w-40 h-40 rounded-full bg-black"></div>
          {/* name */}
          <h3 className="text-2xl font-semibold text-white px-3 py-1 rounded-full reverse-bg">
            I'm Masiha Mohammadpour
          </h3>
          {/* about */}
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
          <button className="reverse-bg p-3 rounded-full animate-bounce mt-4">
            <HiArrowDown className="text-white text-2xl " />
          </button>
        </section>
      </section>
      <section className="w-screen flex flex-col items-center gap-y-10 mb-32" >
        <NeonLamp text="About Me" />
        <p className="w-[40rem] text-white text-center leading-7">
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
    </main>
  );
}
