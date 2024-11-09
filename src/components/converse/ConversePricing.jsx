import { useState, useEffect } from "react";
import Container from "../ui/Container";
import Alap from "./alap";
import SearchEngine from "./searchengine";
import SpeechToText from "./speechtotext";

export default function ConversePricing() {
  const [activeTab, setActiveTab] = useState("SpeechToText");
  const [tabContent, setTabContent] = useState(<SpeechToText />);

  useEffect(() => {
    if (activeTab === "SpeechToText") {
      setTabContent(<SpeechToText />);
    } else if (activeTab === "SearchEngine") {
      setTabContent(<SearchEngine />);
    } else if (activeTab === "Alap") {
      setTabContent(<Alap />);
    }
  }, [activeTab]);

  return (
    <section className="pb-[100px] min-h-screen w-full xl:px-[70px] lg:px-[30px] text-white px-[15px] overflow-y-auto scrollElement">
      <Container>
        <div className="grid">
          <div className="mt-24">
            <div className="mx-auto px-6 lg:px-8">
              <div className="sm:align-center sm:flex sm:flex-col">
                <div className="relative mt-6 flex lg:flex-row md:flex-col flex-col self-center sm:mt-8 border-b lg:pb-0 md:pb-10 pb-10">
                  <button
                    className={`relative whitespace-nowrap border-[#46B8E9] py-2 duration-500 font-medium shadow-sm sm:w-auto lg:px-5 md:px-5 ${
                      "SpeechToText" === activeTab
                        ? "border-b-2 text-[#46B8E9]"
                        : ""
                    }`}
                    onClick={() => setActiveTab("SpeechToText")}
                  >
                    Speech to text/text to speech
                  </button>

                  <button
                    className={`relative whitespace-nowrap border-[#46B8E9] py-2 duration-500 font-medium sm:w-auto lg:px-5 md:px-5 ${
                      "SearchEngine" === activeTab
                        ? "border-b-2 text-[#46B8E9]"
                        : ""
                    }`}
                    onClick={() => setActiveTab("SearchEngine")}
                  >
                    Smart search Engine
                  </button>

                  <button
                    className={`relative whitespace-nowrap border-[#46B8E9] py-2 duration-500 font-medium sm:w-auto lg:px-5 md:px-5 ${
                      "Alap" === activeTab ? "border-b-2 text-[#46B8E9]" : ""
                    }`}
                    onClick={() => setActiveTab("Alap")}
                  >
                    Alap conversational ai
                  </button>
                </div>
              </div>
              <div className="grid justify-center pb-50">{tabContent}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
