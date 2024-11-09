import Image from "next/image";
import wsa from "../../../images/about/icons/wsa.png";
import deeppoint from "../../../images/about/icons/deeppoint.png";
import vega from "../../../images/about/icons/vega.png";
import ict from "../../../images/about/icons/ict.png";
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

const data = {
  sectionTitle: "Areas of expertise",
  services: [
    {
      key: 1,
      year: "2022",
      icon: wsa,
    },
    {
      key: 2,
      year: "2019",
      icon: deeppoint,
    },
    {
      key: 3,
      year: "2022",
      icon: ict,
      extra: "(4x)",
    },
    {
      key: 4,
      year: "2019",
      icon: vega,
    },
  ],
};
function AwardsAndRecognitions({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>
          Awards &<br />
          Recognition
        </span>
      </SectionHeading>
      <div className="my-auto">
        <div className="grid grid-cols-2 gap-5 items-center">
          {data.services.map((service, index) => (
            <div
              className="cursor-pointer bg-white text-black rounded-[22px] border border-white/[.3] hover:border-white flex flex-col min-h-[165px] h-fit justify-around items-center py-5 px-7"
              key={index}
            >
              <div className="bg-white-second rounded-[12px]">
                <Image
                  className="mx-auto"
                  src={service.icon}
                  width={"100%"}
                  height={"100%"}
                  alt={"Experties"}
                />
              </div>
              <p className="font-normal text-center text-lg leading-6">
                {service.year}
                <br />
                {service.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default AwardsAndRecognitions;
