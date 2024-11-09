import React, { useState } from "react";
import DropDowns from "./dropdowns";
import Image from "next/image";

export default function AIDemoInputs({
  data,
  getIndustries,
  setIndustries,
  getInputValue,
  setInputValue,
  getApiData,
}) {
  const [AIInputsData, setAIInputsData] = useState(data);
  const [inputText, setInputText] = useState(AIInputsData.inputText);
  const [audioData, setAudioData] = useState(AIInputsData.audioData);
  const [exampleText, setExampleText] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    getApiData();
  };

  const inputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="border border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
      <form action="#" method="POST" onSubmit={handelSubmit}>
        {AIInputsData?.industries != undefined ? (
          <DropDowns
            getIndustries={getIndustries}
            setIndustries={setIndustries}
            data={AIInputsData.industries}
          />
        ) : null}
        {inputText != undefined ? (
          <div className="mt-2">
            <label
              htmlFor="text"
              className="block text-lg font-medium leading-6 text-white"
            >
              {inputText.inputTitle}
            </label>
            <div className="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                placeholder={inputText.placeholderText}
                value={exampleText === "" ? undefined : exampleText}
                onChange={inputValue}
                required
                className="block bg-white/[.1] text-white text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg"
              />
            </div>
          </div>
        ) : null}
        {audioData != undefined ? (
          <div>
            <label
              htmlFor="text"
              className="block text-lg font-medium leading-6 text-white"
            >
              {audioData.audioTitle}
            </label>
            <div className="flex-1 p-2 mt-2 flex justify-between items-center bg-white/[.1] rounded-md shadow-sm">
              <div className="relative ">
                <p className="bg-white/[.3] text-white text-lg w-full rounded-lg pl-8 py-2 pr-4 shadow-sm">
                  {audioData.recordText}
                </p>
                <div className="pointer-events-none absolute inset-y-0 grid justify-center items-center left-0 pl-3">
                  <span className=" h-2 w-2 bg-[#FF4A4A] rounded-full"></span>
                </div>
              </div>
              <div className="pointer-events-none inset-y-0 w-[44px] h-[44px] bg-white/[.3] grid justify-center items-center rounded-lg">
                <Image src={audioData.attachImg} alt={" "} width={" "} />
              </div>
            </div>
          </div>
        ) : null}
        <div className="grid grid-cols-2 gap-x-5 mt-4">
          {AIInputsData.formBtn.map((item, index) => (
            <div key={index}>
              <button
                type="submit"
                className="flex w-full uppercase justify-center rounded-lg border border-white/[.3] py-3 text-base font-semibold text-white shadow-sm hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {item.btnText}
              </button>
            </div>
          ))}
        </div>
      </form>
      <div className="mt-8">
        <span className="text-[#46B8E9] text-lg">{AIInputsData.noteText}</span>
        {AIInputsData?.exampleText != undefined ? (
          <p
            onClick={() => {
              setExampleText(AIInputsData.exampleText);
            }}
            className="text-lg underline cursor-pointer"
          >
            {AIInputsData.exampleText}
          </p>
        ) : null}
      </div>
    </div>
  );
}
