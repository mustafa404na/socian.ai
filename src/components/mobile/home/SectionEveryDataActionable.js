import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
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
function SectionEveryDataActionable(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Socian AI Helps</span>
      </SectionHeading>
      <h2 className="flex flex-col font-light tracking-widest  grow justify-center">
        <span className="block leading-14 pb-8 text-4xl text-white/[.3] font-thin action-2">
          01
        </span>

        <span className={`action-3 md:text-6xl text-5xl leading-[60px] `}>
          <span>Every</span>
          <br />
          <span>Data</span>
          <br />
          <span>Actionable</span>
        </span>
      </h2>
    </DefaultTemplate>
  );
}

export default SectionEveryDataActionable;
