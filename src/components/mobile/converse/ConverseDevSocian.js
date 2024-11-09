import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import MobileFullButton from "../ui/MobileFullButton";
import MobileText from "../ui/MobileText";
import SectionHeading from "@/components/ui/SectionHeading";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "black",
    iconDirecton: "right",
  },
];
function ConverseDevSocian({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0 lowercase`}>
            dev.socian.ai
          </SectionHeading>
          <MobileText>
            Socian's synergy Marketplace Brings You the Best of AI and NLP in
            One Convenient Location. Now Transform Your Business with the Power
            of NLP.
          </MobileText>
        </div>
      </div>
      {/* <div className="mt-10">
        <MobileFullButton iconDirecton={"right"}>enter here </MobileFullButton>
      </div> */}
    </DefaultTemplate>
  );
}

export default ConverseDevSocian;
