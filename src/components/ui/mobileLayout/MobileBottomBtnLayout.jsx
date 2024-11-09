import SectionLink from "../SectionLink";

export default function MobileBottomBtnLayout() {
  return (
    <div className="flex w-full justify-between pb-5 pt-10">
      <SectionLink href={`#`}>back</SectionLink>
      <SectionLink href={`#`}>next</SectionLink>
    </div>
  );
}
