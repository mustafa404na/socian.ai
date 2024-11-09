import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import Image from "next/image";
import Listen from "../../../images/consumerbuzz/listen.png";
import Analyze from "../../../images/consumerbuzz/analyze.png";
import Visualize from "../../../images/consumerbuzz/visualize.png";
import Interpret from "../../../images/consumerbuzz/understand.png";
import SectionParagraph from "@/components/ui/SectionParagraph";
import React from "react";

const posts = [
  {
    key: "01",
    title: "Listen",
    img: Listen,
    details:
      "Unlock the Full Potential of Your Marketing Efforts with Our Innovative Customer Listening Solution",
    btnText: "Explore",
  },
  {
    key: "02",
    title: "Analyse",
    img: Analyze,
    details:
      "Gain Deeper Customer Insights and Revolutionize Your Customer Engagement with Our Comprehensive Customer Analysis Platform",
    btnText: "Explore",
  },
  {
    key: "03",
    title: "Visualize",
    img: Visualize,
    details:
      "Bring Your Customer Insights to Life with Our Dynamic Visual Presentation.",
    btnText: "Explore",
  },
  {
    key: "04",
    title: "interpret",
    img: Interpret,
    details:
      "Transform Customer Insights into Actionable Strategies. Make Data-Driven Decisions and Maximize Your Customer Analysis Results with Our Robust Platforms",
    btnText: "Explore",
  },
];

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
function ConsumerServices(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      {/* <SectionHeading className={`action-1 pb-9`}>
        <span>Best in Business</span>
      </SectionHeading> */}
      <div className="action-2 overflow-x-auto flex gap-5">
        {posts.map((service) => (
          <div
            key={service.title}
            className="flex flex-col min-w-[300px] p-5 gap-6 rounded-3xl shadow-lg border border-gray-600 hover:border-white duration-500"
          >
            <div className="mx-auto">
              <Image
                src={service.img}
                alt={""}
                width={300}
                height={200}
                className="rounded-lg text-center"
              />
            </div>

            <div className="">
              <p className="text-2xl font-semibold text-gray-200 uppercase">
                {service.title}
              </p>
              <span className="inline-block h-[2px] w-4 bg-[#46B8E9]"></span>
              <SectionParagraph>
                <p className="mt-3 text-gray-100">{service.details}</p>
              </SectionParagraph>
            </div>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
}

export default ConsumerServices;
