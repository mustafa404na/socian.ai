import DefaultTemplate from "@/components/mobile/template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import AZ from "../../../../pages/mobile/products/az";
import Consumerbuzz from "../../../../pages/mobile/products/consumerbuzz";
import Converse from "../../../../pages/mobile/products/converse";
import Analytics from "../../../../pages/mobile/products/analytics";
import ProductImage from "./SvgAnimation/ProductImage";
import { useSelector } from "react-redux";
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
function SectionAToZCustomerIntelligence(props) {
  const [activeTab, setActiveTab] = useState("az");
  const [tabContent, setTabContent] = useState(<AZ />);
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  useEffect(() => {
    if (activeTab === "az") {
      setTabContent(<AZ />);
    } else if (activeTab === "consumerbuzz") {
      setTabContent(<Consumerbuzz />);
    } else if (activeTab === "converse") {
      setTabContent(<Converse />);
    } else if (activeTab === "analytics") {
      setTabContent(<Analytics />);
    }
  }, [activeTab]);

  return (
    <DefaultTemplate buttons={buttons} className={`flex-col`}>
      <div className={`relative h-[40vh]`}>
        <ProductImage />
      </div>

      <div className={`grid gap-y-9 action-2 z-[1] pb-7`}>
        {current === 4 && <AZ />}
        {current === 5 && <Consumerbuzz />}
        {current === 6 && <Analytics />}
        {current === 7 && <Converse />}
      </div>
    </DefaultTemplate>
  );
}

export default SectionAToZCustomerIntelligence;
