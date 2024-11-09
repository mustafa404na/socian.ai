import SectionHeading from "../ui/SectionHeading";

export default function SectionEveryDataActionable() {
  return (
    <section
      id={`section_every_data_actionable`}
      className={`flex lg:flex-row flex-col scrollElement`}
    >
      {/* Left Side */}
      <div
        className={`min-h-screen w-1/2 lg:bg-transparent bg-black text-white flex items-center px-36 desktop_md:px-24 uppercase tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full`}
      >
        <SectionHeading className={`action-1 md:text-5xl text-2xl`}>
          <span>LET</span>
          <span>SOCIAN AI</span>
        </SectionHeading>
      </div>

      {/* Right Side */}
      <div
        className={`white-box-x-from-right min-h-screen w-1/2 lg:bg-transparent bg-white text-black flex items-center px-36 desktop_md:px-24 tablet:min-h-[50vh] tablet:w-full mob:min-h-[50vh] mob:w-full`}
      >
        <h2 className="flex flex-col gap-4 font-light tracking-widest">
          <span className="block leading-14 pb-8 text-4xl font-thin action-2">
            01
          </span>

          <span className={`action-3 md:text-6xl text-3xl`}>
            <span>Decode your audience</span>
            <br />
            <span>and outmaneuver competitors</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
