import Image from "next/image";
import Avata from "../../images/about/custom/tanvir.png";
import AboutSection from "../ui/AboutSection";

export default function AboutCEOsNote() {
  return (
    <AboutSection title={"CEO’s note"}>
      <div className="w-full lg:w-1/4 md:flex" aria-hidden="true">
        <div className="md:w-64 w-52">
          <Image
            alt="CEO Image"
            src={Avata}
            width={"100%"}
            height={"100%"}
            priority
          />
        </div>
      </div>
      <div className="w-full lg:w-3/4 lg:mt-0 md:mt-5">
        <h1 className="bigHeading">
          Tanvir H. Sourov
          <span className="footerHeading  text-[#ffffff4f]  xl:12 lg:mb-8 md:mb-8 inline-block">
            CEO
          </span>
        </h1>
        <p className="paragraph italic mt-0 leading-6  xl:pr-[100px] pr-[15px]">
          “Nothing in the world can take the place of Persistence. Talent will
          not; nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not;
          the world is full of educated derelicts. The slogan 'Press On' has
          solved and always will solve the problems of the human race.”
        </p>
      </div>
    </AboutSection>
  );
}
