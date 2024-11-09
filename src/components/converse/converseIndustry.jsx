import Image from "next/image";
import target from "../../images/converse/target.png";
import SectionLink from "../ui/SectionLink";
import SectionHeading from "../ui/SectionHeading";

export default function ConverseIndustry() {
  return (
    <>
      <section
        id={`recommends`}
        className={`flex tablet:flex-col mob:flex-col scrollElement`}
      >
        {/* Left Side */}
        <div
          className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] lg:pt-0 pt-36 mob:w-full mob:px-0`}
        >
          <div className="w-[250px] md:w-[350px] xl:w-[500px] mx-auto overflow-hidden">
            <Image alt="converse" width={"100%"} height={"100%"} src={target} />
          </div>
        </div>

        {/* Right Side */}
        <div
          className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full mob:px-4`}
        >
          <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
            <SectionHeading>
              <span className={`mob:text-4xl xl:text-[48px] lg:text-4xl`}>
                Our Industry leading recommendation engine worth $250 per month
                is now free for socian analytics users
              </span>
            </SectionHeading>

            <div className={`flex items-center`}>
              <SectionLink href={`/#section_contact_form`}>
                Contact Us
              </SectionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
