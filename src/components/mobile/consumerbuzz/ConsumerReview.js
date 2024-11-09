import React from "react";
import Image from "next/image";
import ellipse from "../../../images/consumerbuzz/ellipse.png";
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

function ConsumerReview(props) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>
          User
          <br />
          review
        </span>
      </SectionHeading>

      <div>
        <div className="mr-4 flex-shrink-0 h-[58px] w-[58px] self-center rounded-[50%] overflow-hidden">
          <Image src={ellipse} width={"100%"} height={"100%"} alt={"ellipse"} />
        </div>
        <div>
          <SectionHeading className={`mt-5`}>Bushra Mehreen</SectionHeading>
          <p className="mb-3 text-[#46B8E9]">
            Head of Market Research, Grameenphone Ltd
          </p>
        </div>
        <MobileText>
          “ GP purchased ConsumerBuzz from Socian to be able to continuously
          analyze mass opinions on the mobile packages we offer. In 2 years, I
          can assure to have gained 600% ROI for all the insights we gained and
          capitalized for best suited offers. “
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

export default ConsumerReview;
