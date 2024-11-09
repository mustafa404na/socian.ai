import Image from "next/image";
import Container from "../ui/Container";
import Listen from "../../images/consumerbuzz/listen.png";
import Analyze from "../../images/consumerbuzz/analyze.png";
import Visualize from "../../images/consumerbuzz/visualize.png";
import Interpret from "../../images/consumerbuzz/understand.png";
import SectionParagraph from "../ui/SectionParagraph";

const data = {
  sectionTitle: "Best in Business",
  services: [
    {
      key: "01",
      title: "Listen",
      img: Listen,
      details:
        "Unlock the Full Potential of Your Marketing Efforts with Our Innovative Customer Listening Solution",
      btnText: "Explore",
    },
    {
      key: "02",
      title: "Analyse",
      img: Analyze,
      details:
        "Gain Deeper Customer Insights and Revolutionize Your Customer Engagement with Our Comprehensive Customer Analysis Platform",
      btnText: "Explore",
    },
    {
      key: "03",
      title: "Visualize",
      img: Visualize,
      details:
        "Bring Your Customer Insights to Life with Our Dynamic Visual Presentation.",
      btnText: "Explore",
    },
    {
      key: "04",
      title: "interpret",
      img: Interpret,
      details:
        "Transform Customer Insights into Actionable Strategies. Make Data-Driven Decisions and Maximize Your Customer Analysis Results with Our Robust Platforms",
      btnText: "Explore",
    },
  ],
};

export default function ConsumerBuzzServices() {
  return (
    <>
      <section
        id={`section_best_in_business`}
        className={`bg-black text-white min-h-screen flex items-center scrollElement`}
      >
        <Container>
          <div className="max-w-[100rem] mx-auto mob:pt-32 mob:px-4">
            <div className="mx-auto mt-12 grid max-w-lg gap-3 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 md:max-w-6xl">
              {data.services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex flex-col overflow-hidden rounded-3xl shadow-lg border border-gray-600 hover:border-white duration-500"
                >
                  <div className="flex flex-col gap-4 mob:gap-2 p-6">
                    <div className="mx-auto">
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="rounded-lg text-center"
                        priority
                      />
                    </div>

                    <div className="">
                      <p className="text-2xl font-semibold text-gray-200 uppercase">
                        {service.title}
                      </p>
                      <span className="inline-block h-[2px] w-4 bg-[#46B8E9]"></span>
                      <SectionParagraph>
                        <p className="mt-3 text-gray-100">{service.details}</p>
                      </SectionParagraph>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
