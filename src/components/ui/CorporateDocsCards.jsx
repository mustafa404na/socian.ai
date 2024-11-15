import Link from "next/link";
import React from "react";

function CorporateDocsCards({ item }) {
  return (
    <Link target={"_blank"} href={item.link}>
      <div className="flex items-center justify-between cursor-pointer py-[23px] px-[20px] border border-white/[.3] rounded-[22px] hover:bg-white duration-500 hover:text-black">
        <p className="text-xl leading-6 font-normal normal-case max-w-[100px] mr-10">
          {item.docName}
        </p>
        <span className="border border-white p-[14px] rounded-[12px] text-xl leading-6 font-normal bg-gray-900 ">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1L6.75 1ZM5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L11.3033 7.75736C11.5962 7.46447 11.5962 6.98959 11.3033 6.6967C11.0104 6.40381 10.5355 6.40381 10.2426 6.6967L6 10.9393L1.75736 6.6967C1.46447 6.40381 0.989593 6.40381 0.696699 6.6967C0.403806 6.98959 0.403806 7.46447 0.696699 7.75736L5.46967 12.5303ZM5.25 1L5.25 12L6.75 12L6.75 1L5.25 1Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default CorporateDocsCards;
