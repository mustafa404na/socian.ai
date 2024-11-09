import CEONoteIcon from "@/components/ui/logos/CEONoteIcon";
import SectionParagraph from "@/components/ui/SectionParagraph";
import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "light",
    iconDirecton: "right",
  },
];
function CEONote({ pageNumber }) {
  return (
    <DefaultTemplate buttons={buttons} className={`flex-col items-center`}>
      <div className="flex flex-wrap">
        <CEONoteIcon />
      </div>
      <div className="grid gap-6 pt-5">
        <span className={`action-3 md:text-6xl text-5xl leading-[60px]`}>
          Tanvir H. Sourov
        </span>
        <span className="text-[#46B8E9] text-2xl uppercase font-bold tracking-widest ">
          CEO
        </span>
        <SectionParagraph>
          “Nothing in the world can take the place of Persistence. Talent will
          not; nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not;
          the world is full of educated derelicts. The slogan 'Press On' has
          solved and always will solve the problems of the human race.”
        </SectionParagraph>
      </div>
    </DefaultTemplate>
  );
}

export default CEONote;
