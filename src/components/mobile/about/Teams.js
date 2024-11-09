import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "light",
    iconDirecton: "right",
  },
];
function Teams({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`grid`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>
          #tough
          <br />
          team
        </span>
      </SectionHeading>
    </DefaultTemplate>
  );
}

export default Teams;
