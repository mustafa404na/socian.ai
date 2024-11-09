import Image from "next/image";
import wsa from "../../images/about/icons/wsa.png";
import deeppoint from "../../images/about/icons/deeppoint.png";
import vega from "../../images/about/icons/vega.png";
import ict from "../../images/about/icons/ict.png";
import achieve from "../../images/about/icons/achieve.png";
import rating from "../../images/about/icons/rating.png";
import AwardLogos from "../ui/logos/AwardLogos";
import AboutSection from "../ui/AboutSection";

export default function AboutAwardsAndRecognitions() {
  const data = {
    sectionTitle: "Awards & Recognitions",
    services: [
      {
        key: 1,
        awardFor: wsa,
        year: "2022",
      },
      {
        key: 2,
        awardFor: ict,
        year: "2022",
        span: "(4x)",
      },
    ],
    servicesTwo: [
      {
        key: 1,
        awardFor: deeppoint,
        year: "2022",
      },
      {
        key: 2,
        awardFor: vega,
        year: "2022",
      },
    ],
  };

  return (
    <AboutSection title={data.sectionTitle} textColor="black">
      <div className="w-full lg:w-1/3 flex tablet:flex-row tablet:gap-7 flex-col justify-center align-middle items-center tablet:order-2 order-1">
        {data.services.map((item, index) => (
          <AwardLogos key={index} item={item} />
        ))}
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center align-baseline md:order-1 order-2">
        <div className="flex flex-col items-center">
          <div className="w-[100px] mx-auto">
            <Image
              className="mx-auto"
              width={"100%"}
              height={"100%"}
              src={achieve}
              alt={"aboutImages"}
            />
          </div>
          <div>
            <Image
              className="mb-[27px] mt-[52px] w-[150px]"
              src={rating}
              width={"100%"}
              height={"100%"}
              alt={"aboutImages"}
            />
          </div>
        </div>
        <h1 className="text-black uppercase font-bold text-center text-2xl">
          Inspired with <br /> goodwill
        </h1>
      </div>
      <div className="w-full lg:w-1/3 flex tablet:flex-row tablet:gap-7 flex-col justify-center align-middle items-center order-3">
        {data.servicesTwo.map((item, index) => (
          <AwardLogos key={index} item={item} />
        ))}
      </div>
    </AboutSection>
  );
}
