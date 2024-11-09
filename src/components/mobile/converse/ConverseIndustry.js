import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import MobileFullButton from "../ui/MobileFullButton";
import target from "../../../images/converse/target.png";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "black",
    iconDirecton: "right",
  },
];
function ConverseIndustry({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className="p-10 pt-0">
          <Image alt="converse" width={"100%"} height={"100%"} src={target} />
        </div>
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0`}>
            Our Industry leading recommendation engine worth $250 per month is
            now free for socian analytics users
          </SectionHeading>
        </div>
      </div>
      <div className="mt-10">
        <MobileFullButton iconDirecton={"right"} href={`/mobile/contactUs`}>
          conatct us
        </MobileFullButton>
      </div>
    </DefaultTemplate>
  );
}

export default ConverseIndustry;
