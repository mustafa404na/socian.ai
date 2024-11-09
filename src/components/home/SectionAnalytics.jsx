import Image from "next/image";
import FeaturedImage from "../../images/home/background/Analytics.svg";
import SectionHeading from "../ui/SectionHeading";
import SectionLink from "../ui/SectionLink";
import SectionParagraph from "../ui/SectionParagraph";

export default function SectionAnalytics() {
  return (
    <section
      id={`section_analytics`}
      className={`flex tablet:flex-col mob:flex-col scrollElement section overflow-hidden`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[40vh] tablet:w-full mob:min-h-[40vh] mob:w-full mob:px-0`}
      >
        <div className={`overflow-hidden`}>
          <Image
            src={FeaturedImage}
            width={820}
            height={810}
            alt={"Feature Overview"}
            priority
            className="absolute inset-0 -translate-x-[50%] -translate-y-2/4 left-[55%] top-[40%] -z-10 action-1"
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[60vh] tablet:w-full tablet:-mt-40 mob:min-h-[60vh] mob:w-full mob:-mt-24 mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 tablet:-mt-40 action-2`}>
          <SectionHeading>
            <span className={`mob:text-4xl`}>Analyze Customer</span>
            <span className={`mob:text-4xl`}>Behaviors</span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`mob:px-0`}>
              A-Z web analytics has never been cheaper, easier, and stronger.
              Pay as you go or choose a package for all your analytics needs in
              a single platform. Monitor the customer journey with Socian
              Analytics.
            </p>
          </SectionParagraph>

          <div className={`flex items-center`}>
            <SectionLink href={`/analytics`}>
              Explore Socian Analytics
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
