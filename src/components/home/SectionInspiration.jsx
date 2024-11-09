import NeverStopGrowingImage from "../mobile/home/SvgAnimation/NeverStopGrowingImage";

export default function SectionInspiration() {
  return (
    <section
      id="NeverStopGrowing"
      className={`min-h-screen relative w-full flex justify-center items-center text-center overflow-hidden scrollElement`}
    >
      <div className="h-screen w-screen absolute -z-1 top-0 left-0 overflow-hidden">
        <NeverStopGrowingImage />
      </div>
      <h1 className="w-full text-white inspiration xl:text-8xl font-bold uppercase tracking-tight text-center tablet:text-6xl lg:text-7xl text-3xl z-10">
        #NeverStopGrowing
      </h1>
    </section>
  );
}
