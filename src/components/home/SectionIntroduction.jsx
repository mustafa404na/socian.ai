import SocianAILogo from "../ui/logos/SocianAILogo";
export default function SectionIntroduction(pageNumber) {
  return (
    <section
      id={`section_introduction`}
      className="bg-black min-h-screen flex items-center scrollElement pb-20"
    >
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto w-[240px] mb-10 intro-logo animateText">
                <SocianAILogo width={350} />
              </div>

              <h2 className="text-4xl text-white tracking-wider intro-title">
                Data To Decisions In One Step
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
