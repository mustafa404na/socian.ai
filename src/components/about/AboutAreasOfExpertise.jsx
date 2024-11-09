import Image from "next/image";
import fb from "../../images/about/icons/fb.png";
import icon from "../../images/about/icons/voice.png";
import voc from "../../images/about/icons/voc.png";
import search from "../../images/about/icons/search.png";
import settings from "../../images/about/icons/settings.png";
import target from "../../images/about/icons/target.png";
import text from "../../images/about/icons/text.png";
import web from "../../images/about/icons/web.png";
import AboutSection from "../ui/AboutSection";

export default function AboutAreasOfExpertise() {
  const data = {
    sectionTitle: "Areas of expertise",
    services: [
      {
        key: 1,
        title: "Voice AI",
        icon: icon,
      },
      {
        key: 2,
        title: "TextAI",
        icon: text,
      },
      {
        key: 3,
        title: "Voice of Customers",
        icon: voc,
      },
      {
        key: 4,
        title: "Social Media Analysis",
        icon: fb,
      },
      {
        key: 5,
        title: "Search Engines",
        icon: search,
      },
      {
        key: 6,
        title: "Recommendations",
        icon: target,
      },
      {
        key: 7,
        title: "Web Analysis",
        icon: web,
      },
      {
        key: 8,
        title: "Voice Automations",
        amountType: "+",
        amounts: "10",
        icon: settings,
      },
    ],
  };

  return (
    <AboutSection title={"Areas of expertise"}>
      <div className="w-full flex flex-wrap ">
        {data.services.map((service, index) => (
          <div
            className="flex flex-wrap lg:w-1/4 w-1/2  tablet:w-1/2 flex-col items-center justify-center md:h-auto lg:mb-0 mb-2 p-2"
            key={index}
          >
            <div className="flex single-area cursor-pointer rounded-[22px]  border border-white/[.3] hover:border-white w-full h-full lg:py-8 desktop_md:py-20 desktop_lg:py-20  px-2 py-10  flex-col items-center justify-center">
              <div className="mx-auto bg-white-second  rounded-[12px]">
                <Image
                  className="w-[50px] h-[50px]"
                  src={service.icon}
                  width={"200px"}
                  height={"200px"}
                  alt={"Experties"}
                />
              </div>
              <p className="paragraph font-normal leading-[22px] text-center pt-5 text-white">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
