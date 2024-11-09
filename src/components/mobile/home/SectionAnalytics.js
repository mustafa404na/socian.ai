import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import FeaturedImage from "../../images/home/background/a-z-customer-intelligence-menu.svg";
import Image from "next/image";
import React from "react";
import Analytics from "../../../pages/mobile/products/analytics";
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
function SectionAnalytics(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <div className={`relative h-[50vh]`}>
        <Image
          src={FeaturedImage.src}
          width={600}
          height={600}
          alt={"Feature Overview"}
          loading="lazy"
          className="absolute inset-0 -translate-x-2/4 -translate-y-2/4 left-[50%] top-[25%] scale-[2] h-full w-full action-1"
        />
      </div>

      <div className={`grid gap-y-9 action-2 z-[1]`}>
        <Analytics />
      </div>
    </DefaultTemplate>
  );
}

export default SectionAnalytics;
