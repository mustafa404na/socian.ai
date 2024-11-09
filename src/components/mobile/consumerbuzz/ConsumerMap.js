import Image from "next/image";
import bubble from "../../../images/consumerbuzz/bubble.png";
import graph from "../../../images/consumerbuzz/graph.png";
import ranking from "../../../images/consumerbuzz/ranking.png";
import clipboard from "../../../images/consumerbuzz/clipboard.png";
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
  sectionTitle: "Consumer Map",
  services: [
    {
      key: 1,
      year: "Social Listening",
      icon: bubble,
    },
    {
      key: 2,
      year: "Advanced Analysis",
      icon: graph,
    },
    {
      key: 3,
      year: "Custom visualisation",
      icon: ranking,
    },
    {
      key: 4,
      year: "Custom Interpretation",
      icon: clipboard,
    },
  ],
};
function ConsumerMap({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>
          Consumer
          <br />
          Map
        </span>
      </SectionHeading>
      <div className="my-auto">
        <div className="grid grid-cols-2 gap-5 items-center">
          {data.services.map((service, index) => (
            <div
              key={"conmap" + index}
              className="cursor-pointer bg-white text-black rounded-[22px] border border-white/[.3] hover:border-white flex flex-col min-h-[165px] h-fit justify-around items-center py-5 px-7"
            >
              <div className="bg-white-second rounded-[12px]">
                <Image
                  className="w-3/4 mx-auto"
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

export default ConsumerMap;
