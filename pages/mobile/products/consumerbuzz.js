import MobileButton from "@/components/mobile/ui/MobileButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionParagraph from "@/components/ui/SectionParagraph";

const buttons = [
  {
    text: "Explore ConsumerBuzz",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
];

function Consumerbuzz(props) {
  return (
    <>
      <SectionHeading>
        <span className={`text-2xl`}>Decode voice of</span>
        <span className={`text-2xl`}>the customer</span>
      </SectionHeading>

      <SectionParagraph>
        <p>
          You cannot analyze millions of Facebook comments or phone calls
          without a time-consuming survey or 40 separate expensive tools. Well,
          now you can with 1/60th the price through the Ace tool in VOC
          analysis: ConsumerBuzz.
        </p>
        {buttons &&
          buttons.map((button, index) => (
            <MobileButton
              key={index}
              href={`/mobile/consumerbuzz`}
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

export default Consumerbuzz;
