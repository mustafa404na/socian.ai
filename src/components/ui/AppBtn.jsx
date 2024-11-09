import React from "react";

export default function AppBtn({ children, className, link, color }) {
  return (
    <button
      type="button"
      className={`text-[12px] inline-flex items-center rounded-3xl mt-5 border text-white border-gray-300/[.5] uppercase px-4 py-2 defultFont font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        color == "dark"
          ? "text-white border-gray-300/[.5] "
          : "text-white border-gray-300/[.5]"
      } ${className}`}
    >
      {children}
      <svg
        className="ml-2"
        width="5"
        height="12"
        viewBox="0 0 5 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 11.5L4.59317 6.97222C5.13561 6.4375 5.13561 5.5625 4.59317 5.02778L0 0.5"
          fill={color ? color : "white"}
        />
      </svg>
    </button>
  );
}
