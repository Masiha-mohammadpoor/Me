"use client";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      <section className="w-screen h-[34rem] main-bg overflow-hidden">
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
              <HiArrowDown className="text-white text-2xl "/>
            </button>
        </section>
      </section>
    </main>
  );
}
