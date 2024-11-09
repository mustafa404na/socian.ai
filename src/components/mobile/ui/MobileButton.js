import React from "react";

function MobileButton({
  children,
  className,
  iconDirecton,
  btnColor,
  onClick,
  href,
}) {
  // change icon color on haver
  const MouseEnterEffectHandeler = (e) => {
    let color = btnColor == "light" ? "white" : "black";
    const element = e.target.querySelector(".arrow");
    if (element) {
      element.style.fill = color;
    }
  };
  const MouseLeaveEffectHandeler = (e) => {
    let color = btnColor == "light" ? "black" : "white";
    const element = e.target.querySelector(".arrow");
    if (element) {
      element.style.fill = color;
    }
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={MouseEnterEffectHandeler}
      onMouseLeave={MouseLeaveEffectHandeler}
      className={`flex gap-1 items-center justify-center lg:px-8 lg:py-4 px-8 py-4 border border-gray-500 text-base font-medium rounded-full shadow-sm ${
        btnColor == "light"
          ? "text-black hover:text-white  bg-white hover:bg-black"
          : "text-white hover:text-black bg-black hover:bg-white"
      }  duration-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase ${className}`}
    >
      {iconDirecton && iconDirecton == "left" ? (
        <svg
          width="8"
          height="15"
          viewBox="0 0 5 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrow"
            d="M5 0.5L0.406834 5.02778C-0.135611 5.5625 -0.135611 6.4375 0.406834 6.97222L5 11.5"
            fill={`${btnColor == "light" ? "black" : "white"}`}
          />
        </svg>
      ) : (
        <></>
      )}
      {children}{" "}
      {iconDirecton && iconDirecton == "right" ? (
        <svg
          width="8"
          height="15"
          viewBox="0 0 5 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrow"
            d="M0 11.5L4.59317 6.97222C5.13561 6.4375 5.13561 5.5625 4.59317 5.02778L0 0.5"
            // fill="#05090A"
            fill={`${btnColor == "light" ? "black" : "white"}`}
          />
        </svg>
      ) : (
        <></>
      )}
    </button>
  );
}

export default MobileButton;
