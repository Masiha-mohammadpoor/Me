"use client";

const NeonLamp = ({text , id}) => {
  return (
    <div id={id} className="flex flex-col gap-y-4 items-center">
    <div className="flex flex-col items-center">
      <div className="w-32 h-6 bg-gray-700 rounded-t-sm rounded-b-3xl"></div>
      <div className="flex gap-x-10">
        {/* lamp 1 */}
        <div className="flex flex-col items-center justify-center origin-top lamp-1">
          <div className="w-[1px] h-10 bg-white"></div>
          <div className="rounded-t-xl w-4 h-3 bg-gray-600"></div>
          <div className="w-7 h-7 rounded-full neonLamp-1 -mt-1"></div>
        </div>
        <div className="flex flex-col items-center justify-center origin-top lamp-2">
          <div className="w-[1px] h-10 bg-white"></div>
          <div className="rounded-t-xl w-4 h-3 bg-gray-600"></div>
          <div className="w-7 h-7 rounded-full neonLamp-2 -mt-1"></div>
        </div>
      </div>
    </div>
    <h2 className="txt-gradiant font-semibold text-2xl">{text}</h2>
    </div>
  );
};

export default NeonLamp;
