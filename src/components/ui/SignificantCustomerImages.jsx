import Image from "next/image";
import React from "react";

function SignificantCustomerImages({ title, image, className }) {
  return (
    <div className={`${className}`}>
      <h2 className="uppercase text-center mb-10">{title}</h2>
      <div className="max-w-full xl:w-[550px] lg:w-[400px] w-full p-5 min-h-[40vh] mb-5">
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

export default SignificantCustomerImages;
