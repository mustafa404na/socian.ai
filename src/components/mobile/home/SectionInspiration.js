import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import React from "react";
import NeverStopGrowingImage from "./SvgAnimation/NeverStopGrowingImage";
const buttons = [
  {
    text: "Explore",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
];
function SectionInspiration(props) {
  return (
    <DefaultTemplate className={`justify-center align-middle items-center`}>
      <div className="h-screen w-screen fixed -z-1 top-0 left-0 overflow-hidden">
        <NeverStopGrowingImage />
      </div>

      <h1 className="text-white inspiration font-bold uppercase tracking-tight text-5xl z-10">
        #Never
        <br />
        StopGrowing
      </h1>
    </DefaultTemplate>
  );
}

export default SectionInspiration;
