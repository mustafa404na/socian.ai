import Image from "next/image";
import analytics from "../../images/analytics/analytics.png";
import one from "../../images/analytics/01.png";
import two from "../../images/analytics/02.png";
import three from "../../images/analytics/03.png";
import four from "../../images/analytics/04.png";
import five from "../../images/analytics/05.png";

export default function AnalyticsReccomends() {
  const data = {
    id: 1,
    partnerImage: analytics,
    listIcon: "",
    list: [
      {
        key: 1,
        text: "A-Z Analytics",
        icon: one,
      },
      {
        key: 2,
        text: "12.5X cheaper than alternatives",
        icon: two,
      },
      {
        key: 3,
        text: "no traffic Data limit",
        icon: three,
      },
      {
        key: 4,
        text: "Free recommendation engine",
        icon: four,
      },
      {
        key: 5,
        text: "No Source Limit",
        icon: five,
      },
    ],
  };

  return (
    <section
      id={`section_consumerbuzz`}
      className={`flex tablet:flex-col mob:flex-col scrollElement`}
    >
      {/* Left Side */}
      <div
        className={`w-1/2 min-h-screen relative isolate flex items-center px-24 tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] lg:pt-0 pt-36 mob:w-full mob:px-0`}
      >
        <div className="w-[250px] md:w-[350px] xl:w-[450px] mx-auto overflow-hidden">
          <Image
            alt="converse"
            width={"100%"}
            height={"100%"}
            src={analytics}
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`w-1/2 min-h-screen px-24 flex items-center tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full mob:px-4`}
      >
        <div className="">
          <ul role="list" className="space-y-10 text-sm leading-6 text-white">
            {data.list.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-[16px] lg:text-xl tablet:text-2xl xl:text-3xl"
              >
                <div className="w-[30px] tablet:w-[24px] lg:w-[25px] mr-8">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={item.icon}
                    alt={item.text}
                  />
                </div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
