import musicnote from "@/images/aidemo/musicnote.png";
import Image from "next/image";
import AIDemoInputs from "./common/AIDemoInputs";
import AIDemoOutputs from "./common/AIDemoOutputs";
import { useState } from "react";

export default function TextToSpeechCom() {
  const data = {
    inputData: {
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
    },
    outputsData: {
      audioOutput: {
        outputImage: musicnote,
        outputTitle: "Output",
        errorText: "Your browser does not support the audio element.",
      },
    },
  };

  const [getInputValue, setInputValue] = useState("");
  const [postOutputValue, setOutputValue] = useState("");

  async function getApiData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fn_index: 1,
      data: [getInputValue, 200, 9000],
      event_data: null,
      session_hash: "qx2r3jhdloa",
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
        console.log(result);
        setOutputValue(result.data[0].name);
      })
      .catch((error) => console.log("error", error));
  }
  console.log(`https://socian.ai:8080/file=${postOutputValue}`);

  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Text to speech
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none items-start lg:grid-cols-2 lg:gap-y-16">
            <AIDemoInputs
              getInputValue={getInputValue}
              setInputValue={setInputValue}
              data={data.inputData}
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
