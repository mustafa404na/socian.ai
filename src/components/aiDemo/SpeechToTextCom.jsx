import musicnote from "@/images/aidemo/musicnote.png";
import attach from "@/images/aidemo/attach.png";
import AIDemoInputs from "./common/AIDemoInputs";
import AIDemoOutputs from "./common/AIDemoOutputs";

export default function SpeechToTextCom() {
  const data = {
    inputData: {
      audioData: {
        audioTitle: "Upload a file",
        recordText: "Record from microphone",
        attachImg: attach,
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
      noteText: "Supported mp3, wav file only*",
    },
    outputsData: {
      audioOutput: {
        outputImage: musicnote,
        outputTitle: "Output",
        outputType: [
          {
            type: "audio/ogg",
            audioSrc: "https://www.w3schools.com/tags/horse.ogg",
          },
          {
            type: "audio/mpeg",
            audioSrc: "https://www.w3schools.com/tags/horse.mp3",
          },
        ],
        errorText: "Your browser does not support the audio element.",
      },
      textOutput: {
        outputTitle: "Output text",
        outputText:
          "ইউক্রেন যুদ্ধে কয়েক মাস ধরে সরাসরি লড়াই করে এসেছেন, এমন একজন কর্মকর্তা ওই বৈঠকে বলেছেন, যুদ্ধে এখন পর্যন্ত রাশিয়ার যত সেনা হতাহত হয়েছে",
      },
      outputBtn: "flag",
    },
  };
  return (
    <div className="py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-5xl font-light text-white sm:text-4xl">
            Speech to text
          </h2>
        </div>
        <div className="mx-auto mt-11 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none items-start lg:grid-cols-2 lg:gap-y-16">
            <AIDemoInputs data={data.inputData} />
            <AIDemoOutputs data={data.outputsData} />
          </dl>
        </div>
      </div>
    </div>
  );
}
