import Image from "next/image";
import React from "react";

function IndustryServedCard({ image, alt, onMouseEnter }) {
  return (
    <div
      className="border border-white/[.3] flex items-center self-center xl:min-w-[80px] lg:min-w-[60px] w-16 md:mx-10 xl:min-h-[80px] h-16 lg:min-h-[60px] justify-center rounded-[22px] hover:bg-[#46B8E9]"
      onMouseEnter={onMouseEnter}
    >
      <Image src={image} alt={alt} className="p-1" />
    </div>
  );
}

export default IndustryServedCard;
