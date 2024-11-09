import topicModules from "@/images/aidemo/topicModules.png";
import Image from "next/image";
import { useState } from "react";
import AIDemoInputs from "./common/AIDemoInputs";

export default function TopicModelingCom() {
  const data = {
    inputText: {
      inputTitle: "Text",
      placeholderText: "Enter your text here",
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
  };

  const [getIndustries, setIndustries] = useState("");
  const [getInputValue, setInputValue] = useState("");

  async function getApiData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fn_index: 3,
      data: [getIndustries.industriesName, getInputValue],
      event_data: null,
      session_hash: "ifanvrfxci",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("https://socian.ai:8080/run/predict/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Topic Modeling
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none items-start lg:grid-cols-2 lg:gap-y-16">
            <AIDemoInputs
              getIndustries={getIndustries}
              getInputValue={getInputValue}
              setInputValue={setInputValue}
              setIndustries={setIndustries}
              getApiData={getApiData}
              data={data}
            />
            <div className="border grid gap-y-5 border-white/[.3] rounded-md px-4 py-6 bg-red w-full">
              <div>
                <label
                  htmlFor="email"
                  className="inline-flex text-lg font-medium leading-6 text-white"
                >
                  Modeling
                </label>
                <div className="mt-2 text-center grid justify-center">
                  <Image src={topicModules} alt={" "} width={"100%"} />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full uppercase justify-center rounded-lg border border-white/[.3] py-3 text-base font-semibold text-white shadow-sm hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Expand
                </button>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
