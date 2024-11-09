import Container from "../ui/Container";
import SectionLink from "../ui/SectionLink";

const data = {
  sectionTitle: "dev.socian.ai",
  sectionDetails:
    "Socian's synergy Marketplace Brings You the Best of AI and NLP in One Convenient Location. Now Transform Your Business with the Power of NLP.",
  sectionBtn: [
    {
      id: 1,
      btnText: "Enter",
    },
  ],
};

export default function ConverseDevSocian() {
  return (
    <section
      id="devtools"
      className="relative h-screen bg-white p-10 snappedDIv flex justify-center align-middle items-center scrollElement"
    >
      <Container>
        <div className="mx-auto flex p-5 bg-black w-full rounded-3xl py-20  flex-col justify-center align-middle items-center">
          <h1 className="bigHeading">{data.sectionTitle}</h1>
          <div className="w-[64px] mx-auto border-t border-[#46B8E9] my-[24px]" />
          <p className="text-center max-w-3xl text-xl leading-6 font-normal font-jamjuree lg:text-lg">
            {data.sectionDetails}
          </p>
          <div className={`flex items-center mt-5`}>
            <SectionLink href={`/converse-pricing`}>Enter here</SectionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
