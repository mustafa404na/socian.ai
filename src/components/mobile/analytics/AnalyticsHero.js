import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import analytics from "../../../images/analytics/analytics.png";
import one from "../../../images/analytics/01.png";
import two from "../../../images/analytics/02.png";
import three from "../../../images/analytics/03.png";
import four from "../../../images/analytics/04.png";
import five from "../../../images/analytics/05.png";
import Image from "next/image";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "black",
    iconDirecton: "right",
  },
];

const list = [
  {
    key: 1,
    text: "A-Z Analytics",
    icon: one,
  },
  {
    key: 2,
    text: "12.5X cheaper than alternatives",
    icon: two,
  },
  {
    key: 3,
    text: "no traffic Data limit",
    icon: three,
  },
  {
    key: 4,
    text: "Free recommendation engine",
    icon: four,
  },
  {
    key: 5,
    text: "No Source Limit",
    icon: five,
  },
];

function AnalyticsHero({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className="p-10 pt-0">
          <Image
            alt="converse"
            width={"100%"}
            height={"100%"}
            src={analytics}
          />
        </div>
        <div className="w-full">
          <ul role="list" className="space-y-9 text-sm leading-6 text-white">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-[16px] capitalize lg:text-xl tablet:text-2xl xl:text-3xl"
              >
                <div className="w-7 mr-10">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={item.icon}
                    alt={item.text}
                  />
                </div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="mt-10">
        <MobileFullButton iconDirecton={"right"}>Get started</MobileFullButton>
      </div> */}
    </DefaultTemplate>
  );
}

export default AnalyticsHero;
