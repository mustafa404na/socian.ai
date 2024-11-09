import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionParagraph from "@/components/ui/SectionParagraph";
import React from "react";

const posts = [
  {
    id: "01",
    title: "360 Technologies",
    description:
      "Socian offers a complete  AI-powered solutions tailored to your business needs. Easily extract, analyze, visualize, learn,  and customize through our repository of AI assets.",
  },
  {
    id: "02",
    title: "ROI Driven",
    description:
      "Socian's tools optimize speed and boost productivity to extract real business value, strengthening your company's position and aiding in reaching revenue goals.",
  },
  {
    id: "03",
    title: "Highest Accuracy",
    description:
      "Socian's tools provide accurate analytics data to aid companies in finding effective solutions to business problems. The platform helps design future-proof strategies by utilizing crucial industry metrics.",
  },
  {
    id: "04",
    title: "A-Z Customization",
    description:
      "Socian's tools allow for customization of unstructured data presentation, and automation, enabling creation of personalized dashboards and solutions. This fosters confidence, creativity and innovation",
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
function SectionBestInBusiness(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Best in Business</span>
      </SectionHeading>
      <div className="action-2 overflow-x-auto flex gap-5">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col min-w-[300px] p-6 gap-6 rounded-3xl shadow-lg border border-gray-600 hover:border-white duration-500"
          >
            <div className="w-12 h-12 text-center items-center rounded-xl bg-gray-900 p-3 border border-white">
              <span>{post.id}</span>
            </div>

            <p className="text-2xl font-semibold text-gray-200 uppercase w-1/2">
              {post.title}
            </p>
            <SectionParagraph>
              <p className="mt-3 text-gray-100 leading-6">{post.description}</p>
            </SectionParagraph>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
}

export default SectionBestInBusiness;
