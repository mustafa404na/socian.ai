import AboutSection from "../ui/AboutSection";
import SectionParagraph from "../ui/SectionParagraph";

const posts = [
  {
    id: "01",
    title: "Marketing Team",
    description:
      "The marketing team can leverage ConsumerBuzz to fine-tune its strategies by better understanding customer preferences and market trends. With real-time insights, they can create more targeted and effective campaigns, ensuring that messaging resonates with the audience and drives engagement.",
  },
  {
    id: "02",
    title: "Product Development Team",
    description:
      "The Product Development Team can use ConsumerBuzz to analyze customer feedback and identify opportunities for product enhancements and innovations. By aligning product features with customer needs and preferences, they can accelerate development cycles and deliver market-ready solutions that meet evolving demands.",
  },
  {
    id: "03",
    title: "Customer Experience Team",
    description:
      "The Customer Experience Team can collaborate with ConsumerBuzz to continuously monitor and improve customer satisfaction. By analyzing feedback, they can identify pain points and areas for improvement, enabling them to deliver a superior and personalized customer experience that fosters loyalty and retention.",
  },
  {
    id: "04",
    title: "Sales Team",
    description:
      "The Sales Team can use ConsumerBuzz to stay ahead of competitors by understanding market dynamics and customer expectations in real-time. Armed with actionable insights, they can refine their pitches, anticipate customer needs, and close deals more effectively, driving revenue growth and market share expansion.",
  },
];

export default function SectionBestInBusiness() {
  return (
    <AboutSection title={"ConsumerBuzz Collaborations"}>
      <div className="mx-auto grid max-w-lg gap-x-3 mob:gap-x-0 mob:gap-y-3 tablet:gap-y-3 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 md:max-w-6xl action-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col overflow-hidden rounded-3xl shadow-lg border border-gray-600 hover:border-white duration-500"
          >
            <div className="flex flex-col gap-3 mob:gap-2 p-4">
              <div className="w-12 h-12 text-center items-center rounded-xl bg-gray-900 p-3 border border-white">
                <span>{post.id}</span>
              </div>

              <div className="">
                <p className="text-2xl font-semibold text-gray-200 uppercase w-1/2">
                  {post.title}
                </p>
                <span className="inline-block h-[2px] w-4 bg-white/[.2]"></span>
                <SectionParagraph>
                  <p className="mt-2 text-gray-100 leading-6">
                    {post.description}
                  </p>
                </SectionParagraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AboutSection>
  );
}
