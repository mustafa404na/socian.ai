import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import IconIndustry from "../../../images/icons/industrie.png";
import IconBlockOfData from "../../../images/icons/data.png";
import IconCountry from "../../../images/icons/countre.png";
import IconLanguage from "../../../images/icons/language.png";

const stats = [
  {
    key: 1,
    title: "Industries",
    amountType: "+",
    amounts: "40",
    icon: IconIndustry,
  },
  {
    key: 2,
    title: "Block of data",
    extra: "B",
    amounts: "2.0",
    icon: IconBlockOfData,
  },
  {
    key: 3,
    title: "Countries",
    amountType: "+",
    amounts: "10",
    icon: IconCountry,
  },
  {
    key: 4,
    title: "Languages",
    amountType: "+",
    amounts: "25",
    icon: IconLanguage,
  },
];
const buttons = [
  {
    text: "Back",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
  {
    text: "Next",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
];
function SectionCapableAndConfident(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Confident & Capable</span>
      </SectionHeading>
      <div className="grid grid-cols-2 gap-5 action-2">
        {stats.map((stat, index) => (
          <div
            key={`confident_and_capable_${Math.random(1) * 100}`}
            className="flex flex-col overflow-hidden rounded-3xl shadow-lg border border-gray-600 duration-500 hover:border-white transition-all delay-75 cursor-pointer"
          >
            <div className="flex flex-col-reverse gap-4 p-5">
              <div className={`flex justify-between items-center`}>
                <div className="text-lg text-white">{stat.title}</div>
              </div>

              <div className="text-5xl font-bold text-white flex items-center">
                {stat.amounts}
                <span className="text-[#46B8E9]">{stat.extra}</span>
                <span
                  className={
                    stat.amountType === "+"
                      ? "text-[#46B8E9] xl:text-[46px] text-3xl"
                      : "text-[#46B8E9]"
                  }
                >
                  {stat.amountType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
}

export default SectionCapableAndConfident;
