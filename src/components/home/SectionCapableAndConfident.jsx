import Image from "next/image";
import IconIndustry from "../../images/icons/industrie.png";
import IconBlockOfData from "../../images/icons/data.png";
import IconCountry from "../../images/icons/countre.png";
import IconLanguage from "../../images/icons/language.png";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

const stats = [
  {
    id: 1,
    name: "Industries",
    stat: "40+",
    icon: IconIndustry,
  },
  {
    id: 2,
    name: "Block of Data",
    stat: "2.0B+",
    icon: IconBlockOfData,
  },
  {
    id: 3,
    name: "Countries",
    stat: "10+",
    icon: IconCountry,
  },
  {
    id: 4,
    name: "Languages",
    stat: "25+",
    icon: IconLanguage,
  },
];

export default function SectionCapableAndConfident() {
  return (
    <section
      id={`section_capable_and_confident`}
      className={`bg-black text-white min-h-screen flex items-center scrollElement py-20`}
    >
      <Container>
        <div className="max-w-[100rem] mx-auto mob:pt-32 mob:px-4 action-0">
          <SectionHeading>
            <span className={`action-1`}>Confident & Capable</span>
          </SectionHeading>
          <div className="mx-auto mt-12 grid max-w-lg gap-3 lg:max-w-none lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:max-w-6xl action-2">
            {stats.map((stat) => (
              <div
                key={`confident_and_capable_${stat.id}`}
                className="flex flex-col overflow-hidden rounded-3xl shadow-lg border border-gray-600 duration-500 hover:border-white transition-all delay-75 cursor-pointer"
              >
                <div className="flex flex-col gap-4 p-6">
                  <div className={`flex justify-between items-center`}>
                    <div className="text-xl font-light text-gray-200">
                      {stat.name}
                    </div>

                    <div className="w-14 h-14 flex items-center rounded-2xl bg-gray-700 p-1">
                      <Image
                        src={stat.icon}
                        width={50}
                        height={50}
                        className={`mx-auto`}
                        alt={stat.name}
                        priority
                      />
                    </div>
                  </div>

                  <div className="text-6xl font-light text-gray-200">
                    {stat.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
