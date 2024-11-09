import Image from "next/image";
import search from "../../images/converse/search.png";
import SectionHeading from "../ui/SectionHeading";
import SectionParagraph from "../ui/SectionParagraph";
import SectionLink from "../ui/SectionLink";

export default function ConverseSearch() {
  return (
    <section
      id={`mysearch`}
      className={`flex tablet:flex-col mob:flex-col scrollElement`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] lg:pt-0 pt-36 mob:w-full mob:px-0`}
      >
        <div className="w-[250px] md:w-[350px] xl:w-[500px] mx-auto overflow-hidden">
          <Image alt="converse" width={"100%"} height={"100%"} src={search} />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full mob:px-4`}
      >
        <div className={`flex flex-col gap-y-10 mob:gap-y-5`}>
          <SectionHeading className={`gap-0`}>
            <span className={`mob:text-4xl lg:text-4xl`}>
              Effortless Plug & Play{" "}
            </span>
            <span className={`mob:text-4xl lg:text-4xl`}>
              Search Integration
            </span>
          </SectionHeading>

          <SectionParagraph>
            <p className={`pr-24 mob:px-0 lg:text-lg`}>
              MySearch, an AI-powered on-site search engine, increases
              conversion rate by providing convenient NLP-powered search across
              websites, applications, and software.
            </p>
          </SectionParagraph>

          <div className={`flex items-center`}>
            <SectionLink href={`/#section_contact_form`}>
              Contact Us
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
