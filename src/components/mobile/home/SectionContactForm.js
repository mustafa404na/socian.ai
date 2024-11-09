import SocianAIContactForm from "@/components/home/forms/SocianAIContactForm";
import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
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
function SectionContactForm(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Let’s Connect</span>
      </SectionHeading>
      <div className="action-2">
        <SocianAIContactForm />
      </div>
    </DefaultTemplate>
  );
}

export default SectionContactForm;
