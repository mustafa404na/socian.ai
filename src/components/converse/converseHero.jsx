import SectionHeading from "../ui/SectionHeading";
import SectionParagraph from "../ui/SectionParagraph";
import SectionLink from "../ui/SectionLink";
import converseImg from "../../images/converse/converse_hero.png";
import Image from "next/image";
export default function ConverseHero() {
  return (
    <section
      id={`section_consumerbuzz`}
      className={`flex tablet:flex-col mob:flex-col scrollElement`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] lg:pt-0 pt-36 mob:w-full mob:px-0`}
      >
        <div className="w-[250px] md:w-[350px] xl:w-[400px] mx-auto overflow-hidden">
          <Image
            alt="converse"
            width={500}
            height={500}
            src={converseImg}
            priority
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0`}>
            <span className={`mob:text-4xl lg:text-4xl`}>Decode voice of</span>
            <span className={`mob:text-4xl lg:text-4xl`}>the customer</span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`pr-24 mob:px-0 lg:text-lg`}>
              Stay connected to customers with Socian's conversational AI tools
              for improved engagement through quick, responsive action. Automate
              repetitive queries and complaints handling for more efficient
              business software.
            </p>
          </SectionParagraph>

          <div className={`flex items-center`}>
            <SectionLink href={`/converse#devtools`}>Dev tools</SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
