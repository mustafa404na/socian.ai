import AboutSection from "../ui/AboutSection";
import DataPartner from "@/images/about/partners/DataPartner";
import CorporatePartners from "@/images/about/partners/CorporatePartners";
import AffiliatePartners from "@/images/about/partners/AffiliatePartners";

export default function AboutSignificantPartners() {
  return (
    <AboutSection
      id={`section_partners`}
      title={"Significant partners"}
      className="items-start align-top justify-start"
    >
      <div className="w-full flex flex-row justify-center align-top items-start flex-wrap desktop_md:gap-x-8">
        <div className={``}>
          <h2 className="uppercase text-center mb-10">Data partners</h2>
          <div className="max-w-full inline-flex xl:w-[400px] lg:h-[40vh] p-10">
            <DataPartner />
          </div>
        </div>
        <div className={``}>
          <h2 className="uppercase text-center mb-10">Corporate partners</h2>
          <div className="max-w-full inline-flex xl:w-[400px] lg:h-[40vh] p-10">
            <CorporatePartners />
          </div>
        </div>
        <div className={``}>
          <h2 className="uppercase text-center mb-10">Affiliate partners</h2>
          <div className="max-w-full inline-flex xl:w-[400px] lg:h-[40vh] p-10">
            <AffiliatePartners />
          </div>
        </div>
      </div>
    </AboutSection>
  );
}
