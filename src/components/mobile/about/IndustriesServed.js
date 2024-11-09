import React, { useEffect } from "react";
import aviation from "../../../images/about/industry/Vector.png";
import consumerelect from "../../../images/about/industry/Vector(1).png";
import ecommerce from "../../../images/about/industry/Vector(2).png";
import education from "../../../images/about/industry/Vector(3).png";
import govt from "../../../images/about/industry/Vector(4).png";
import health from "../../../images/about/industry/Vector(5).png";
import legal from "../../../images/about/industry/Vector(6).png";
import news from "../../../images/about/industry/Vector(7).png";
import restaurant from "../../../images/about/industry/Vector(8).png";
import retail from "../../../images/about/industry/Vector(9).png";
import security from "../../../images/about/industry/Vector(10).png";
import stock from "../../../images/about/industry/Vector(11).png";
import telco from "../../../images/about/industry/Vector(12).png";
import aviationBg from "../../../images/about/industry/aviation.png";
import consumerelectBg from "../../../images/about/industry/consumerelect.png";
import ecommerceBg from "../../../images/about/industry/ecommerce.png";
import educationBg from "../../../images/about/industry/education.png";
import govtBg from "../../../images/about/industry/govt.png";
import healthBg from "../../../images/about/industry/health.png";
import legalBg from "../../../images/about/industry/legal.png";
import newsBg from "../../../images/about/industry/news.png";
import restaurantBg from "../../../images/about/industry/restaurant.png";
import retailBg from "../../../images/about/industry/retail.png";
import securityBg from "../../../images/about/industry/security.png";
import stockBg from "../../../images/about/industry/stock.png";
import telcoBg from "../../../images/about/industry/telco.png";
import IndustryServedCard from "@/components/ui/IndustryServedCard";
import { useState } from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import SectionHeading from "@/components/ui/SectionHeading";

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

function IndustriesServed(props) {
  const [activeTab, setActiveTab] = useState(educationBg);
  const [tabContent, setTabContent] = useState(educationBg);
  const [tabText, setTabText] = useState("190k Gold Standard Data");

  useEffect(() => {
    if (activeTab === "aviationBg") {
      setTabContent(aviationBg);
      setTabText("190k Gold Standard Data");
    } else if (activeTab === "consumerelectBg") {
      setTabContent(consumerelectBg);
      setTabText("185k Gold Standard Data");
    } else if (activeTab === "ecommerceBg") {
      setTabContent(ecommerceBg);
      setTabText("152k Gold Standard Data");
    } else if (activeTab === "educationBg") {
      setTabContent(educationBg);
      setTabText("155k Gold Standard Data");
    } else if (activeTab === "govtBg") {
      setTabContent(govtBg);
      setTabText("150k Gold Standard Data");
    } else if (activeTab === "healthBg") {
      setTabContent(healthBg);
      setTabText("163k Gold Standard Data");
    } else if (activeTab === "legalBg") {
      setTabContent(legalBg);
      setTabText("158k Gold Standard Data");
    } else if (activeTab === "newsBg") {
      setTabContent(newsBg);
      setTabText("170k Gold Standard Data");
    } else if (activeTab === "restaurantBg") {
      setTabContent(restaurantBg);
      setTabText("160k Gold Standard Data");
    } else if (activeTab === "retailBg") {
      setTabContent(retailBg);
      setTabText("182k Gold Standard Data");
    } else if (activeTab === "securityBg") {
      setTabContent(securityBg);
      setTabText("198k Gold Standard Data");
    } else if (activeTab === "stockBg") {
      setTabContent(stockBg);
      setTabText("200k Gold Standard Data");
    } else if (activeTab === "telcoBg") {
      setTabContent(telcoBg);
      setTabText("157k Gold Standard Data");
    }
  }, [activeTab]);
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <SectionHeading className={`action-1 pb-9`}>
        <span>Best in Business</span>
      </SectionHeading>
      <div
        className="relative h-[35vh] mb-6 rounded-[18px] text-3xl text-center w-full overflow-hidden bg-no-repeat bg-center bg-cover items-center justify-center"
        style={{ backgroundImage: `url(${tabContent.src})` }}
      >
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-3xl text-center mx-auto">{tabText}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <IndustryServedCard
            image={aviation}
            alt={"education"}
            onMouseEnter={() => setActiveTab("educationBg")}
          />

          <IndustryServedCard
            image={consumerelect}
            alt={"aviation"}
            onMouseEnter={() => setActiveTab("telcoBg")}
          />

          <IndustryServedCard
            image={ecommerce}
            alt={"consumerelect"}
            onMouseEnter={() => setActiveTab("consumerelectBg")}
          />
        </div>
        <div className="flex justify-around">
          <IndustryServedCard
            image={education}
            alt={"education"}
            onMouseEnter={() => setActiveTab("aviationBg")}
          />

          <IndustryServedCard
            image={govt}
            alt={"govt"}
            onMouseEnter={() => setActiveTab("legalBg")}
          />
        </div>
        <div className="flex justify-between">
          <IndustryServedCard
            image={health}
            alt={"health"}
            onMouseEnter={() => setActiveTab("retailBg")}
          />

          <IndustryServedCard
            image={legal}
            alt={"legal"}
            onMouseEnter={() => setActiveTab("securityBg")}
          />

          <IndustryServedCard
            image={news}
            alt={"news"}
            onMouseEnter={() => setActiveTab("restaurantBg")}
          />
        </div>
        <div className=" flex justify-around">
          <IndustryServedCard
            image={restaurant}
            alt={"restaurant"}
            onMouseEnter={() => setActiveTab("healthBg")}
          />

          <IndustryServedCard
            image={retail}
            alt={"retail"}
            onMouseEnter={() => setActiveTab("stockBg")}
          />
        </div>
        <div className=" flex justify-between">
          <IndustryServedCard
            image={security}
            alt={"security"}
            onMouseEnter={() => setActiveTab("newsBg")}
          />

          <IndustryServedCard
            image={stock}
            alt={"stock"}
            onMouseEnter={() => setActiveTab("ecommerceBg")}
          />

          <IndustryServedCard
            image={telco}
            alt={"telco"}
            onMouseEnter={() => setActiveTab("govtBg")}
          />
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default IndustriesServed;
