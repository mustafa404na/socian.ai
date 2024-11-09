import B2CCorporation from "@/images/about/partners/B2CCorporation";
import GovtAgencies from "@/images/about/partners/GovtAgencies";
import AboutSection from "../ui/AboutSection";
export default function AboutSignificantCustomers() {
  return (
    <AboutSection
      title={"Significant Customers"}
      id={`section_customers`}
      className="lg:item-start lg:justify-center lg:align-top"
    >
      <div className="w-full flex flex-col lg:flex-row justify-center align-top items-center lg:items-start flex-wrap gap-x-5">
        <div className={``}>
          <h2 className="uppercase text-center mb-10">B2C corporation</h2>
          <div className="max-w-full inline-flex xl:w-[400px] lg:h-[40vh] p-10">
            <B2CCorporation />
          </div>
        </div>
        <div className={``}>
          <h2 className="uppercase text-center mb-10">Govt. Agencies</h2>
          <div className="max-w-full inline-flex xl:w-[400px] lg:h-[40vh] p-10">
            <GovtAgencies />
          </div>
        </div>
      </div>
    </AboutSection>
  );
}
