import microphone from "@/images/aidemo/microphone.png";
import candle from "@/images/aidemo/candle.png";
import search from "@/images/aidemo/search.png";
import Image from "next/image";
import AISearchOutputs from "./common/AISearchOutputs";
import AISearchInputs from "./common/AISearchInputs";
import { useState } from "react";

export default function SearchCom() {
  const data = {
    inputData: {
      inputSearch: {
        inputType: "search",
        placeholderText: "Search here",
        placeholderImg: search,
        microphone: {
          backgroudColor: "FFCA03",
          icon: microphone,
        },
      },
      inputOptions: [
        {
          name: "Search all",
        },
        {
          name: "More",
          icon: candle,
        },
      ],
    },
    outputsData: [
      {
        id: 1,
        title: "Remembers what user said earlier in the conversation",
        options: [
          {
            name: "Remembers",
          },
          {
            name: "What",
          },
          {
            name: "User said",
          },
          {
            name: "Earlier in",
          },
        ],
      },
      {
        id: 2,
        title: "Remembers what user said earlier in the conversation",
        options: [
          {
            name: "Remembers",
          },
          {
            name: "What",
          },
          {
            name: "User said",
          },
          {
            name: "Earlier in",
          },
        ],
      },
      {
        id: 3,
        title: "Remembers what user said earlier in the conversation",
        options: [
          {
            name: "Remembers",
          },
          {
            name: "What",
          },
          {
            name: "User said",
          },
          {
            name: "Earlier in",
          },
        ],
      },
      {
        id: 4,
        title: "Remembers what user said earlier in the conversation",
        options: [
          {
            name: "Remembers",
          },
          {
            name: "What",
          },
          {
            name: "User said",
          },
          {
            name: "Earlier in",
          },
        ],
      },
    ],
  };

  const [getInputValue, setInputValue] = useState("");

  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Search
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="border grid gap-y-6 border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
            {/* <div className="grid gap-y-4">
              <div className="flex items-center gap-x-3">
                <div className="flex-1 relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image src={search} alt={" "} width={" "} />
                  </div>
                  <input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    placeholder="Type here"
                    required
                    className="block bg-transparent text-white text-lg w-full rounded-lg py-3 pl-12 pr-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg"
                  />
                </div>
                <div className="w-14 h-14 bg-[#FFCA03] rounded-xl overflow-hidden grid justify-center items-center">
                  <Image src={microphone} alt={" "} width={" "} />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <a className="text-lg underline" href="">
                    Search all
                  </a>
                </div>
                <div className="flex">
                  <a className="text-lg underline" href="">
                    More
                  </a>
                  <div className="ml-3">
                    <Image src={candle} alt={" "} width={" "} />
                  </div>
                </div>
              </div>
            </div> */}
            <AISearchInputs
              getInputValue={getInputValue}
              setInputValue={setInputValue}
              data={data.inputData}
            />
            <hr className="border-white/[.1]" />
            <AISearchOutputs data={data.outputsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
