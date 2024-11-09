import Image from "next/image";
import Logo from "../../images/consumerbuzz/consumerbuzz.png";
import SectionLinkWhite from "../ui/SectionLinkWhite";

export default function ConsumerBuzzPageBanner() {
  return (
    <section className="bg-white text-black min-h-screen flex items-center scrollElement">
      <div className="mx-auto lg:pt-10">
        <div className="w-[424px] mx-auto overflow-hidden">
          <Image
            src={Logo}
            alt={"consumerbuzz logo"}
            width={"100%"}
            height={"100%"}
            className="w-full text-center"
          />
        </div>

        <h1 className="text-5xl my-6 lg:pt-10 lg:pb-10 xl:py-2 text-black text-center">
          The World is yours to Monitor
        </h1>

        <div className="w-full md:flex grid tablet:justify-center justify-start items-center py-5 mob:mt-5 tablet:gap-x-2 gap-y-2">
          <div className={`flex items-center md:justify-center justify-start`}>
            <SectionLinkWhite href={`https://mybuzz.socian.ai/`}>
              Get started
            </SectionLinkWhite>
          </div>
          <span className="mx-5 hidden lg:inline">|</span>
          <div className={`flex items-center md:justify-center justify-start`}>
            <SectionLinkWhite href={`https://forms.gle/BfYYooe99faRJg7m8`}>
              Partner with us
            </SectionLinkWhite>
          </div>
          <span className="mx-5 hidden lg:inline">|</span>
          <div className={`flex items-center md:justify-center justify-start`}>
            <SectionLinkWhite href={`/#section_contact_form`}>
              book a demo
            </SectionLinkWhite>
          </div>
        </div>
      </div>
    </section>
  );
}
