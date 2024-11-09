import AboutSection from "../ui/AboutSection";
import AboutBannerIcon from "../ui/logos/AboutBannerIcon";

export default function AboutCompanyOverview() {
  return (
    <AboutSection
      id="overview"
      title={"Company Overview"}
      className="flex-col-reverse"
    >
      <div className="lg:w-1/2">
        <h1 className="text-5xl xl:mb-12 lg:mb-8">What is Socian? </h1>

        <p className="xl:text-lg desktop_md:text-[25px] desktop_lg:text-[25px] ">
        Socian is a cutting-edge AI platform revolutionizing mass media intelligence. By harnessing the power of natural language processing, Socian helps businesses unlock actionable insights from social media and online sources. With features like real-time sentiment analysis, topic tracking, and competitor benchmarking, companies can stay ahead of trends and optimize their marketing strategies. **ConsumerBuzz**, Socian's flagship product, empowers businesses to enhance customer engagement and make data-driven decisions, transforming how they connect with their audiences. Experience the future of decision-making with Socian—where actionable intelligence meets innovative technology.
        </p>
      </div>
      <div className="w-full lg:w-1/2 lg:flex justify-end" aria-hidden="true">
        <div className="min-w-[400px] xl:min-w-[500px]">
          <AboutBannerIcon />
        </div>
      </div>
    </AboutSection>
  );
}
