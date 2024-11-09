import MobileButton from "@/components/mobile/ui/MobileButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionParagraph from "@/components/ui/SectionParagraph";

const buttons = [
  {
    text: "Explore Converse",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
];

function Converse(props) {
  return (
    <>
      <SectionHeading>
        <span className={`text-2xl`}>Automate & Optimize</span>
        <span className={`text-2xl`}>Everything</span>
      </SectionHeading>

      <SectionParagraph>
        <p>
          Whether it is your search engine, recommendations, ad placements, or
          chatbots, Socian can automate every process of your customer cycle.
          Browse products and services now from the catalog of Converse
        </p>
        {buttons &&
          buttons.map((button, index) => (
            <MobileButton
              key={index}
              href={`/mobile/converse`}
              className={`mt-6`}
              iconDirecton={button.iconDirecton}
              btnColor={button.btnColor}
            >
              {button.text}
            </MobileButton>
          ))}
      </SectionParagraph>
    </>
  );
}

export default Converse;
