import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";
import MobileFullButton from "../ui/MobileFullButton";
import MobileText from "../ui/MobileText";

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

function ConsumerVersion(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      {/* <SectionHeading className={`action-1 pb-9`}>
        <span>Best in Business</span>
      </SectionHeading> */}
      <div className="h-[35vh] mb-6 rounded-[18px] w-full overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YDM6NWm2Zs0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <SectionHeading>See version 1.0 promo</SectionHeading>
        <hr className="my-5 w-[70px]" />
        <MobileText>
          Consumerbuzz is a powerful solution that helps businesses to have a
          better understanding of their target audience, while keeping track of
          competitors.
        </MobileText>
      </div>

      <div className="mt-10">
        <MobileFullButton
          href={`https://consumerbuzz.socian.ai/`}
          iconDirecton={"right"}
        >
          See complete product
        </MobileFullButton>
        <MobileFullButton href={`/mobile/contactUs`} iconDirecton={"right"}>
          Book a demo
        </MobileFullButton>
      </div>
    </DefaultTemplate>
  );
}

export default ConsumerVersion;
