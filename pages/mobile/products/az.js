import MobilePragraph from "@/components/mobile/ui/MobilePragraph";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionParagraph from "@/components/ui/SectionParagraph";
import MobileButton from "@/components/mobile/ui/MobileButton";


const buttons = [
  {
    text: "Explore ConsumerBuzz",
    link: "/consumerbuzz",
    color: "light",
    iconDirecton: "right",
  },
  {
    text: "Explore Anlytics",
    link: "/analytics",
    color: "light",
    iconDirecton: "right",
  },
  {
    text: "Explore Convers",
    link: "/converse",
    color: "light",
    iconDirecton: "right",
  },
];

function AZ(props) {
  return (
    <>
      <SectionHeading>
        <span>INTRODUCING</span>
        <span>CONSUMERBUZZ</span>
      </SectionHeading>

      {/* <MobilePragraph>
      A cutting-edge platform that empowers businesses to stay ahead by transforming vast amounts of customer feedback into actionable business intelligence. By integrating real-time insights, ConsumerBuzz helps you understand your audience better, adapt swiftly to market trends, and outpace the competition in an ever-evolving landscape.
      </MobilePragraph> */}
      

      <SectionParagraph>
        <p>
        A cutting-edge platform that empowers businesses to stay ahead by transforming vast amounts of customer feedback into actionable business intelligence. By integrating real-time insights, ConsumerBuzz helps you understand your audience better, adapt swiftly to market trends, and outpace the competition in an ever-evolving landscape.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-5">
        {buttons &&
          buttons.map((button, index) => (
            <MobileButton
              key={index}
              href={button.link}
              iconDirecton={button.iconDirecton}
              btnColor={button.btnColor}
            >
              {button.text}
            </MobileButton>
        ))}
        </div>
      </SectionParagraph>
    </>
  );
}

export default AZ;
