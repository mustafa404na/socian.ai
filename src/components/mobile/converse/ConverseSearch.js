import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import MobileFullButton from "../ui/MobileFullButton";
import search from "../../../images/converse/search.png";
import MobileText from "../ui/MobileText";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "black",
    iconDirecton: "right",
  },
];
function ConverseSearch({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className="p-10 pt-0">
          <Image alt="converse" width={"100%"} height={"100%"} src={search} />
        </div>
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0`}>
            Effortless Plug
            <br />& Play Search Integration
          </SectionHeading>
          <MobileText>
            MySearch, an AI-powered on-site search engine, increases conversion
            rate by providing convenient NLP-powered search across websites,
            applications, and software.
          </MobileText>
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

export default ConverseSearch;
