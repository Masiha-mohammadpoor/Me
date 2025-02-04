"use client";
import Image from "next/image";

const Skill = ({ id, src, title }) => {
  return (
    <div
      data-aos={id <= 5 ? "fade-right" : "fade-left"}
      data-aos-duration="2500"
      className="skill overflow-hidden relative z-0 col-span-1 rounded-lg transition-all p-[3px] bg-gray-700"
    >
      <div className="cursor-pointer w-full h-full rounded-lg flex flex-col items-center gap-y-6 pt-2 pb-4 bg-gray-700">
        <Image src={src} alt="js" width={100} height={100} />
        <p className="text-white font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Skill;
