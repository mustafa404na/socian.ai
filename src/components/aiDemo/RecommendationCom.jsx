import star from "@/images/aidemo/star.png";
import candle from "@/images/aidemo/candle.png";
import AISearchInputs from "./common/AISearchInputs";
import AISearchOutputs from "./common/AISearchOutputs";
import { useState } from "react";

export default function RecommendationCom() {
  const data = {
    inputData: {
      inputSearch: {
        inputType: "recommendation",
        placeholderText: "Most trending places",
        placeholderImg: star,
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
    ],
  };

  const [getInputValue, setInputValue] = useState("");

  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Recommendation
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="border grid gap-y-6 border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
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
