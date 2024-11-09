import Analytics from "../../../pages/mobile/products/analytics";
import AZ from "../../../pages/mobile/products/az";
import Consumerbuzz from "../../../pages/mobile/products/consumerbuzz";
import Converse from "../../../pages/mobile/products/converse";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FeaturedImage from "../../images/home/background/All.svg";
import SectionHeading from "../ui/SectionHeading";
import SectionLink from "../ui/SectionLink";
import SectionParagraph from "../ui/SectionParagraph";

export default function SectionAToZCustomerIntelligence() {
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  const [activeTab, setActiveTab] = useState("az");
  const [tabContent, setTabContent] = useState(<AZ />);
  useEffect(() => {
    if (activeTab === "az") {
      setTabContent(<AZ />);
    } else if (activeTab === "consumer") {
      setTabContent(<Consumerbuzz />);
    } else if (activeTab === "convers") {
      setTabContent(<Converse />);
    } else if (activeTab === "anlytics") {
      setTabContent(<Analytics />);
    }
  }, [activeTab]);
  return (
    <section
      id={`section_az_customer_intelligence`}
      className={`flex tablet:flex-col mob:flex-col scrollElement overflow-hidden`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[40vh] tablet:w-full mob:min-h-[40vh] mob:w-full mob:px-0`}
      >
        <div className={`overflow-hidden`}>
          {/* <ProductImage /> */}

          <Image
            src={FeaturedImage}
            width={811}
            height={900}
            alt={"Feature Overview"}
            className="absolute inset-0 -translate-x-[50%] -translate-y-2/4  left-[50%] top-[45%] mob:top-[50%]  action-1"
            priority
          />
        </div>
      </div>

      {/* Right Side */}
      {/* <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[60vh] tablet:w-full tablet:-mt-40 mob:min-h-[60vh] mob:w-full mob:-mt-24 mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 action-2`}>
          <AZ />
        </div>
      </div> */}

      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[60vh] tablet:w-full tablet:-mt-40 mob:min-h-[60vh] mob:w-full mob:-mt-24 mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 action-2`}>
          <SectionHeading>
            <span className={`mob:text-4xl`}>INTRODUCING</span>
            <span className={`mob:text-4xl`}>CONSUMERBUZZ</span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`mob:px-0`}>
            A cutting-edge platform that empowers businesses to stay ahead by transforming vast amounts of customer feedback into actionable business intelligence. By integrating real-time insights, ConsumerBuzz helps you understand your audience better, adapt swiftly to market trends, and outpace the competition in an ever-evolving landscape.
            </p>
          </SectionParagraph>

          <div className={`flex items-center`}>
            <SectionLink href={`/consumerbuzz`}>
              Explore Consumerbuzz
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
