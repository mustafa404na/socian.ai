import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import { useSelector } from "react-redux";
import B2CCorporation from "@/images/about/partners/B2CCorporation";
import GovtAgencies from "@/images/about/partners/GovtAgencies";

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

function Partners(props) {
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>
          Significant
          <br />
          customers
        </span>
      </SectionHeading>
      <div className="min-h-[40vh]" id={`section_customers`}>
        {current === 8 && (
          <div className={`flex flex-col-reverse items-center`}>
            <h2 className="uppercase text-center mb-10">B2C corporation</h2>
            <div className="max-w-full inline-flex w-[300px]">
              <B2CCorporation />
            </div>
          </div>
        )}
        {current === 9 && (
          <div className={`flex flex-col-reverse items-center`}>
            <h2 className="uppercase text-center mb-10">Govt. Agencies</h2>
            <div className="max-w-full inline-flex w-[300px]">
              <GovtAgencies />
            </div>
          </div>
        )}
      </div>
    </DefaultTemplate>
  );
}

export default Partners;
