import Image from "next/image";
import React, { useState } from "react";
import ProgressBar from "./progressBar";

export default function AIDemoOutputs({ data, postOutputValue }) {
  const [AIOutputsData, setAIOutputsData] = useState(data);
  const [audioOutput, setAudioOutput] = useState(AIOutputsData.audioOutput);
  const [textOutput, setTextOutput] = useState(AIOutputsData.textOutput);
  const [sentimentOutput, setSentimentOutput] = useState(
    AIOutputsData.sentimentOutput
  );
  return (
    <div className="border grid gap-y-5 border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
      {AIOutputsData?.textOutput != undefined ? (
        <div>
          <label
            htmlFor="email"
            className="inline-flex text-lg font-medium leading-6 text-white"
          >
            {textOutput.outputTitle}
          </label>

          <div className="mt-2">
            <p className="block bg-white/[.1] text-white text-lg w-full rounded-lg py-3 px-4 shadow-sm border border-white/[.3] placeholder:text-white placeholder:text-lg">
              {textOutput.outputText}
            </p>
          </div>
        </div>
      ) : null}
      {AIOutputsData?.audioOutput != undefined ? (
        <div>
          <label
            htmlFor="email"
            className="inline-flex text-lg font-medium leading-6 text-white"
          >
            <Image
              className="mr-2"
              src={audioOutput.outputImage}
              alt={" "}
              width={24}
            />
            {audioOutput.outputTitle}
          </label>
          <div className="mt-2">
            <div className="bg-black text-white p-4 rounded-lg">
              <audio
                controls
                className="w-full"
                preload="metadata"
                src={`https://socian.ai:8080/file=${postOutputValue}`}
              ></audio>
            </div>
          </div>
        </div>
      ) : null}

      {AIOutputsData?.sentimentOutput != undefined ? (
        <>
          <div>
            <label
              htmlFor="text"
              className="inline-flex text-lg font-medium leading-6 text-white"
            >
              <Image
                className="mr-2"
                src={sentimentOutput.outputImage}
                alt={" "}
                width={24}
              />
              Output
            </label>
          </div>
          <div className="mt-2 text-center grid justify-center">
            <p className="font-bold uppercase">
              {postOutputValue === "" ? (
                <Image
                  className="mr-2"
                  src={sentimentOutput.outputImage}
                  alt={" "}
                  width={24}
                />
              ) : (
                postOutputValue
              )}
            </p>
          </div>

          <ProgressBar
            progressData={sentimentOutput.progressData}
            postOutputValue={postOutputValue}
          />
        </>
      ) : null}

      {AIOutputsData?.outputBtn != undefined ? (
        <div>
          <button
            type="submit"
            className="flex w-full uppercase justify-center rounded-lg border border-white/[.3] py-3 text-base font-semibold text-white shadow-sm hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {AIOutputsData.outputBtn}
          </button>
        </div>
      ) : null}
    </div>
  );
}
