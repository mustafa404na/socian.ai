import React, { useState } from "react";
import star from "@/images/aidemo/star.png";
import microphone from "@/images/aidemo/microphone.png";
import search from "@/images/aidemo/search.png";
import Image from "next/image";

export default function AISearchInputs(data) {
  const [AISearchInputData, setAISearchInputData] = useState(data.data);
  const [inputSearch, setInputSearch] = useState(AISearchInputData.inputSearch);
  const [inputOptions, setInputOptions] = useState(
    AISearchInputData.inputOptions
  );

  console.log(AISearchInputData);

  return (
    <div className="grid gap-y-4">
      {inputSearch?.inputType === "recommendation" ? (
        <div className="flex items-center gap-x-3">
          <div className="flex-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={star} alt={" "} width={" "} />
            </div>
            <input
              id="text"
              name="text"
              type="text"
              autoComplete="text"
              placeholder="Most trending places"
              required
              className="block bg-white/[.1] text-white text-lg w-full rounded-lg py-3 pl-12 pr-4 shadow-sm placeholder:text-white placeholder:text-lg focus:outline-none"
            />
          </div>
        </div>
      ) : null}
      {inputSearch?.inputType === "search" ? (
        <div className="flex items-center gap-x-3">
          <div className="flex-1 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src={inputSearch.placeholderImg} alt={" "} width={" "} />
            </div>
            <input
              id="text"
              name="text"
              type="text"
              autoComplete="text"
              placeholder={inputSearch.placeholderText}
              required
              className="block bg-transparent text-white text-lg w-full rounded-lg py-3 pl-12 pr-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg"
            />
          </div>

          {inputSearch?.microphone ? (
            <div
              className={`w-14 h-14 bg-[#${inputSearch.microphone.backgroudColor}] rounded-xl overflow-hidden grid justify-center items-center`}
            >
              <Image src={inputSearch.microphone.icon} alt={" "} width={" "} />
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="flex justify-between">
        {inputOptions.map((item, index) => (
          <div className="flex" key={index}>
            <a className="text-lg underline" href="">
              {item.name}
            </a>
            {item?.icon ? (
              <div className="ml-3">
                <Image src={item.icon} alt={" "} width={" "} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
