import Image from "next/image";
import fb from "../../../images/about/icons/fb.png";
import voice from "../../../images/about/icons/voice.png";
import voc from "../../../images/about/icons/voc.png";
import search from "../../../images/about/icons/search.png";
import settings from "../../../images/about/icons/settings.png";
import target from "../../../images/about/icons/target.png";
import text from "../../../images/about/icons/text.png";
import web from "../../../images/about/icons/web.png";
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

const data = {
  sectionTitle: "Areas of expertise",
  services: [
    {
      key: 1,
      title: "Voice AI",
      icon: voice,
    },
    {
      key: 2,
      title: "TextAI",
      icon: text,
    },
    {
      key: 3,
      title: "Voice of Customers",
      icon: voc,
    },
    {
      key: 4,
      title: "Social Media Analysis",
      icon: fb,
    },
    {
      key: 5,
      title: "Search Engines",
      icon: search,
    },
    {
      key: 6,
      title: "Recommendations",
      icon: target,
    },
    {
      key: 7,
      title: "Web Analysis",
      icon: web,
    },
    {
      key: 8,
      title: "Voice Automations",
      amountType: "+",
      amounts: "10",
      icon: settings,
    },
  ],
};
function AreasOfExpertise({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <div className="my-auto">
        <div className="grid grid-cols-2 gap-5 items-center">
          {data.services.map((service, index) => (
            <div
              className="cursor-pointer rounded-[22px] border border-white/[.3] hover:border-white flex flex-col min-h-[165px] h-fit justify-center items-center py-5 px-7"
              key={index}
            >
              <div className="bg-white-second rounded-[12px]">
                <Image
                  className="w-[38px] h-[38px]"
                  src={service.icon}
                  width={"100%"}
                  height={"100%"}
                  alt={"Experties"}
                />
              </div>
              <p className="font-normal text-center pt-5 text-base leading-normal text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default AreasOfExpertise;
