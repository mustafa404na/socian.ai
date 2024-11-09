import Image from "next/image";
import React from "react";

function AwardLogos({ item }) {
  return (
    <div className=" border border-black/[.3] hover:border-black duration-500 my-5 flex items-center w-full max-w-[500px] justify-between h-[165px] rounded-[22px] overflow-hidden">
      <div>
        <Image
          className="w-full max-w-[200px] mx-auto"
          width={"400"}
          height={"400"}
          src={item.awardFor}
          alt="aboutImages"
        />
      </div>
      <span className="mx-[32px] px-[15px] py-[32px]  rounded-[22px] text-black font-bold text-center flex flex-col gap-y-2">
        <span className={`desktop_md:text-4xl`}>{item.year}</span>
        {item.span && <span className={`desktop_md:text-xl`}>{item.span}</span>}
      </span>
    </div>
  );
}

export default AwardLogos;
