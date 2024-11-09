import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import TrustImage from "./SvgAnimation/TrustImage";

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
function SectionTrustedAndAppreciated(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Trusted & Appreciated</span>
      </SectionHeading>
      <div
        className={`flex grow py-16 mx-auto tablet:w-full justify-center items-center`}
      >
        <TrustImage />
      </div>
    </DefaultTemplate>
  );
}

export default SectionTrustedAndAppreciated;
