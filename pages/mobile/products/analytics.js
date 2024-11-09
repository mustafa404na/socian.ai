import MobileButton from "@/components/mobile/ui/MobileButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionParagraph from "@/components/ui/SectionParagraph";

const buttons = [
  {
    text: "Explore Socian analytics",
    link: "link",
    color: "light",
    iconDirecton: "right",
  },
];

function Analytics(props) {
  return (
    <>
      <SectionHeading>
        <span className={`text-2xl`}>Analyze Customer</span>
        <span className={`text-2xl`}>Behaviors</span>
      </SectionHeading>

      <SectionParagraph>
        <p>
          A-Z web analytics has never been cheaper, easier, and stronger. Pay as
          you go or choose a package for all your analytics needs in a single
          platform. Monitor the customer journey with Socian Analytics.
        </p>

        {buttons &&
          buttons.map((button, index) => (
            <MobileButton
              key={index}
              href={`/mobile/analytics`}
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

export default Analytics;
