import { useState, useEffect } from "react";
import Container from "../ui/Container";
import AnalyticsPerMonthPricing from "./AnalyticsPerMonthPricing";
import AnalyticsPerYearsPricing from "./AnalyticsPerYearsPricing";

export default function AnalyticsPricing() {
  const [activeTab, setActiveTab] = useState("SpeechToText");
  const [tabContent, setTabContent] = useState(<AnalyticsPerYearsPricing />);

  useEffect(() => {
    if (activeTab === "AnalyticsPerYearsPricing") {
      setTabContent(<AnalyticsPerYearsPricing />);
    } else if (activeTab === "AnalyticsPerMonthPricing") {
      setTabContent(<AnalyticsPerMonthPricing />);
    }
  }, [activeTab]);

  return (
    <section className="min-h-screen mb-[50px]">
      <Container>
        <div className="grid">
          <div className="mt-24">
            <div className="mx-auto px-6 lg:px-8">
              <div className="sm:align-center sm:flex sm:flex-col">
                <div className="relative mt-6 flex lg:flex-row md:flex-row flex-col self-center sm:mt-8 nav-border lg:pb-0 md:pb-0 pb-10">
                  <button
                    className={`relative pricingBtn whitespace-nowrap border border-transparent py-2  font-medium sm:w-auto sm:px-28 ${
                      "AnalyticsPerMonthPricing" === activeTab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("AnalyticsPerMonthPricing")}
                  >
                    For 1 month
                  </button>
                  <button
                    className={`relative pricingBtn whitespace-nowrap border-gray-200 py-2  font-medium shadow-sm sm:w-auto sm:px-28 ${
                      "SpeechToText" === activeTab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("AnalyticsPerYearsPricing")}
                  >
                    for 1 year
                  </button>
                </div>
              </div>
              <div className="grid justify-center">{tabContent}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
