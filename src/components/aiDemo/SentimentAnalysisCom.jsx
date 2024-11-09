import alignleft from "@/images/aidemo/alignleft.png";
import AIDemoInputs from "./common/AIDemoInputs";
import AIDemoOutputs from "./common/AIDemoOutputs";
import { useEffect, useState } from "react";

export default function SentimentAnalysisCom() {
  const data = {
    inputsData: {
      industries: {
        industriesTitle: "Industries",
        industriesDropdown: [
          { industriesId: 1, industriesName: "Genaral" },
          { industriesId: 2, industriesName: "Telco" },
          { industriesId: 3, industriesName: "Telco" },
        ],
      },
      inputText: {
        inputTitle: "Text",
        placeholderText: "Enter a positive or negative sentence here",
      },
      formBtn: [
        {
          btnId: 1,
          btnText: "Clear",
        },
        {
          btnId: 2,
          btnText: "Submit",
        },
      ],
      noteText: "Examples*",
      exampleText: "This is wonderful",
    },
    outputsData: {
      sentimentOutput: {
        title: "Positive",
        outputImage: alignleft,
        progressData: {
          positiveProgress: "50",
          neutralProgress: "30",
          negativeProgress: "20",
        },
      },
      outputBtn: "Interpret",
    },
  };
  const [getIndustries, setIndustries] = useState("");
  const [getInputValue, setInputValue] = useState("");

  const [postOutputValue, setOutputValue] = useState("");

  // useEffect(() => {
  //   console.log(getIndustries.industriesName);
  // }, [getIndustries]);

  async function getApiData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fn_index: 2,
      data: [getIndustries.industriesName, getInputValue],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("https://socian.ai:8080/run/predict/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log(result);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
        setOutputValue(result.data[0]);
        console.log(postOutputValue);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Sentiment Analysis
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none items-start lg:grid-cols-2 lg:gap-y-16">
            <AIDemoInputs
              getIndustries={getIndustries}
              setIndustries={setIndustries}
              getInputValue={getInputValue}
              setInputValue={setInputValue}
              data={data.inputsData}
              getApiData={getApiData}
            />
            <AIDemoOutputs
              data={data.outputsData}
              postOutputValue={postOutputValue}
            />
          </dl>
        </div>
      </div>
    </div>
  );
}
