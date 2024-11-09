import React from "react";

function AppBigTitle({ children, className }) {
  return (
    <div className="xl:pr-16 bluebgdiv">
      <div className="bluebg"></div>
      <h1
        className={`bigHeading lg:text-[60px] xl:text-[80px] xl:leading-[90px]  leading-[60px]  text-white ${className}`}
      >
        {children}
      </h1>
    </div>
  );
}

export default AppBigTitle;
