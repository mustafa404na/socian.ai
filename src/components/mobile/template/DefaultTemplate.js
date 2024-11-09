import MoblieNav from "@/components/mobile/nav/MoblieNav";
import { nextPage, previousPage } from "@/redux/mobilePagination/actions";
import { setCurrentPage } from "@/redux/mobilePagination/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileButton from "../ui/MobileButton";

function DefaultTemplate({ children, NavColor, className, bgColor }) {
  const dispatch = useDispatch();
  const backHandelChange = () => {
    dispatch(previousPage());
  };
  const nextHandelChange = () => {
    dispatch(nextPage());
  };
  const homeHandelChange = () => {
    dispatch(setCurrentPage(1));
  };
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  return (
    <div
      className={`flex flex-col h-screen w-screen justify-start overflow-x-hidden scrollElement ${bgColor}`}
    >
      <MoblieNav NavColor={NavColor} />
      <div className="flex flex-col grow overflow-x-hidden overflow-y-auto">
        <div className={`grow flex px-[20px] pt-32  ${className}`}>
          {children}
        </div>
        <div
          className={`self-baseline px-5 flex  items-center align-middle w-full pt-10 pb-20 gap-4 z-10 ${
            current == 1 ? "justify-center" : "justify-between"
          }`}
        >
          {current == 1 && (
            <MobileButton
              className={`w-full`}
              onClick={nextHandelChange}
              iconDirecton={"right"}
            >
              Explore
            </MobileButton>
          )}
          {current == 1 ? (
            <></>
          ) : (
            <MobileButton onClick={backHandelChange} iconDirecton={"left"}>
              Back
            </MobileButton>
          )}
          {current == pages || current == 1 ? (
            <></>
          ) : (
            <MobileButton onClick={nextHandelChange} iconDirecton={"right"}>
              Next
            </MobileButton>
          )}
          {current == pages && (
            <MobileButton onClick={homeHandelChange} iconDirecton={"right"}>
              top
            </MobileButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default DefaultTemplate;
