import Image from "next/image";
import FeaturedImage from "../../images/home/background/Consumerbuzz.svg";
import SectionHeading from "../ui/SectionHeading";
import SectionLink from "../ui/SectionLink";
import SectionParagraph from "../ui/SectionParagraph";

export default function SectionConsumerbuzz() {
  return (
    <section
      id={`section_consumerbuzz`}
      className={`flex tablet:flex-col mob:flex-col scrollElement overflow-hidden`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[40vh] tablet:w-full mob:min-h-[40vh] mob:w-full mob:px-0`}
      >
        <div className={`overflow-hidden`}>
          <Image
            src={FeaturedImage}
            width={852}
            height={720}
            alt={"Feature Overview"}
            priority
            className="absolute inset-0 -translate-x-[45%] -translate-y-2/4 left-[50%] top-[40%] -z-10 action-1"
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[60vh] tablet:w-full tablet:-mt-40 mob:min-h-[60vh] mob:w-full mob:-mt-24 mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 action-2`}>
          <SectionHeading>
            <span className={`mob:text-4xl`}>Decode voice of</span>
            <span className={`mob:text-4xl`}>the customer</span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`mob:px-0`}>
              You cannot analyze millions of Facebook comments or phone calls
              without a time-consuming survey or 40 separate expensive tools.
              Well, now you can with 1/60th the price through the Ace tool in
              VOC analysis: ConsumerBuzz.
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
