import AboutBannerIcon from "@/components/ui/logos/AboutBannerIcon";
import SectionParagraph from "@/components/ui/SectionParagraph";
import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "light",
    iconDirecton: "right",
  },
];
function AboutIntro({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <div>
        <AboutBannerIcon />
      </div>
      <div className="grid gap-6 pt-5">
        <span className={`action-3 md:text-6xl text-5xl leading-[60px]`}>
          What is
          <br />
          Socian?
        </span>
        <SectionParagraph>
          Socian Ltd. is a leading NLP company that specializes in developing
          natural language processing technologies for the enterprise market.
          Their cutting-edge software is designed to automatically extract
          insights from unstructured data, making it easier for businesses to
          make data-driven decisions. Some of the key applications of their
          technology include sentiment analysis, text classification, and named
          entity recognition.
        </SectionParagraph>
      </div>
    </DefaultTemplate>
  );
}

export default AboutIntro;
