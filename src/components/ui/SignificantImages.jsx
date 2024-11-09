import Image from "next/image";
import React from "react";

function SignificantImages({ title, image, className }) {
  return (
    <div className={`${className}`}>
      <h2 className="uppercase text-center mb-10">{title}</h2>
      <div className="max-w-full xl:w-[400px] lg:w-[320px] w-[300px] p-10">
        <Image
          className="w-full max-w-full"
          width={"100%"}
          height={"100%"}
          src={image}
          alt={image}
        />
      </div>
    </div>
  );
}

export default SignificantImages;
