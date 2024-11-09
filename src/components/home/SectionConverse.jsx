import Image from "next/image";

import FeaturedImage from "../../images/home/background/Converse.svg";
import SectionHeading from "../ui/SectionHeading";
import SectionLink from "../ui/SectionLink";
import SectionParagraph from "../ui/SectionParagraph";

export default function SectionConverse() {
  return (
    <section
      id={`section_converse`}
      className={`flex tablet:flex-col mob:flex-col scrollElement overflow-hidden`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative  flex items-center px-24 tablet:min-h-[40vh] tablet:w-full mob:min-h-[40vh] mob:-mt-24  mob:w-full mob:px-0`}
      >
        <div className={`overflow-hidden`}>
          <Image
            src={FeaturedImage}
            width={766}
            height={767}
            alt={"Feature Overview"}
            priority
            className="absolute inset-0 -translate-x-[50%] -translate-y-2/4  left-[50%] top-[35%] mob:top-[50%] action-1"
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[60vh] tablet:w-full mob:min-h-[60vh] mob:w-full  mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 action-2`}>
          <SectionHeading>
            <span className={`mob:text-4xl`}>Automate & Optimize</span>
            <span className={`mob:text-4xl`}>Everything</span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`mob:px-0`}>
              Whether it is your search engine, recommendations, ad placements,
              or chatbots, Socian can automate every process of your customer
              cycle. Browse products and services now from the catalog of
              Converse
            </p>
          </SectionParagraph>

          <div className={`flex items-center`}>
            <SectionLink href={`/converse`}>Explore Converse</SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
