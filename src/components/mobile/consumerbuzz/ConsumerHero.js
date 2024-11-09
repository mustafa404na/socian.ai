import Logo from "../../../images/consumerbuzz/consumerbuzz.png";
import React, { useEffect } from "react";
import DefaultTemplate from "../template/DefaultTemplate";
import MobileFullButton from "../ui/MobileFullButton";
import MobileText from "../ui/MobileText";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeNavColor } from "./../../../redux/mobilePagination/actions";
const buttons = [
  {
    text: "Explore",
    link: "link",
    btnColor: "black",
    iconDirecton: "right",
  },
];
function ConsumerHero({ pageNumber }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNavColor("light"));
    return () => dispatch(changeNavColor("dark"));
  }, []);
  return (
    <DefaultTemplate
      buttons={buttons}
      className={`flex-col`}
      bgColor={`bg-white`}
      pageNumber={pageNumber}
    >
      <div className="justify-center items-center align-middle flex flex-1 flex-col">
        <div className="px-5 mx-auto overflow-hidden">
          <Image
            src={Logo}
            alt={"consumerbuzz logo"}
            width={"100%"}
            height={"100%"}
            className="w-full text-center"
          />
        </div>
        <MobileText
          className={`uppercase tracking-widest text-black pt-10 text-center font-bold text-2xl`}
        >
          The World is
          <br />
          yours to Monitor
        </MobileText>
      </div>
      <div className="mt-10">
        <MobileFullButton
          href={`https://consumerbuzz.socian.ai/`}
          iconDirecton={"right"}
          btnColor={`light`}
        >
          Get started
        </MobileFullButton>
        <MobileFullButton
          href={`https://forms.gle/BfYYooe99faRJg7m8`}
          iconDirecton={"right"}
          btnColor={`light`}
        >
          Partner with us
        </MobileFullButton>
        <MobileFullButton
          href={`/mobile/contactUs`}
          iconDirecton={"right"}
          btnColor={`light`}
        >
          Book a demo
        </MobileFullButton>
      </div>
    </DefaultTemplate>
  );
}

export default ConsumerHero;
