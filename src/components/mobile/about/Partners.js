import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import { useSelector } from "react-redux";
import DataPartner from "@/images/about/partners/DataPartner";
import CorporatePartners from "@/images/about/partners/CorporatePartners";
import AffiliatePartners from "@/images/about/partners/AffiliatePartners";

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
          partners
        </span>
      </SectionHeading>
      <div className="min-h-[40vh]" id={`section_partners`}>
        {current === 5 && (
          <div className={`flex flex-col-reverse items-center`}>
            <h2 className="uppercase text-center mb-10">Data partners</h2>
            <div className="max-w-full inline-flex w-[300px]">
              <DataPartner />
            </div>
          </div>
        )}
        {current === 6 && (
          <div className={`flex flex-col-reverse items-center`}>
            <h2 className="uppercase text-center mb-10">Corporate partners</h2>
            <div className="max-w-full inline-flex w-[300px]">
              <CorporatePartners />
            </div>
          </div>
        )}
        {current === 7 && (
          <div className={`flex flex-col-reverse items-center`}>
            <h2 className="uppercase text-center mb-10">Affiliate partners</h2>
            <div className="max-w-full inline-flex w-[300px]">
              <AffiliatePartners />
            </div>
          </div>
        )}
      </div>
    </DefaultTemplate>
  );
}

export default Partners;
