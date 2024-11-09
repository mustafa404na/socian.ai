import SocianAILogo from "@/components/ui/logos/SocianAILogo";
import React from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import MobileText from "../ui/MobileText";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "light",
    iconDirecton: "right",
  },
];
function SectoinHero({ pageNumber }) {
  return (
    <DefaultTemplate
      buttons={buttons}
      btnAlign={"justify-center"}
      className="justify-center"
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-col">
        <SocianAILogo width={200} height={250} />
        <h1 className="pt-5 text-center font-bold text-xl">
          <MobileText className={`uppercase tracking-widest`}>
            Data To Decisions <br /> In One Step
          </MobileText>
        </h1>
      </div>
    </DefaultTemplate>
  );
}

export default SectoinHero;
