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
function ConverseHero({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className="p-10 pt-0">
          <img
            alt="converse"
            width={"100%"}
            height={"100%"}
            src={
              "https://socianaistorageaccount.blob.core.windows.net/public-images/logos/socian-converse-logo.png"
            }
          />
        </div>
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0`}>
            Socian
            <br />
            Converse
          </SectionHeading>
          <MobileText>
            Stay connected to customers with Socian's conversational AI tools
            for improved engagement through quick, responsive action. Automate
            repetitive queries and complaints handling for more efficient
            business software.
          </MobileText>
        </div>
      </div>
      {/* <div className="mt-10">
        <MobileFullButton iconDirecton={"right"}>Dev tools</MobileFullButton>
      </div> */}
    </DefaultTemplate>
  );
}

export default ConverseHero;
