import React from "react";

function AboutHeading({ children, color, className }) {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full justify-center align-middle items-center pb-[50px] lg:pb-[30px] ${className}`}
    >
      <div className="w-full lg:w-1/2 flex ">
        <div className="">
          <h2
            className={`bigHeading uppercase pb-1 w-full ${
              color && color == "black" ? "text-black" : " text-white "
            }`}
          >
            {children}
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-1/2" aria-hidden="true">
        <div
          className={`w-full border-t  ${
            color && color == "black" ? "border-black" : "border-gray-300"
          }`}
        />
      </div>
    </div>
  );
}

export default AboutHeading;
