import React, { useState } from "react";
import { useSelector } from "react-redux";
import DefaultTemplate from "../template/DefaultTemplate";

function SocianAiHelps(props) {
  const [toggleContent, setToggleContent] = useState(1);
  const handelChange = () => {
    if (toggleContent == 1 && true) {
      setToggleContent(2);
    } else if (toggleContent == 2 && true) {
      setToggleContent(1);
    } else if (toggleContent == 1 && false) {
    } else if (toggleContent == 2 && false) {
    }
  };
  const pageInfo = useSelector((state) => state);
  const { pages, current } = pageInfo;
  return (
    <DefaultTemplate>
      <div className="flex flex-col grow">
        <h2 className="text-2xl uppercase font-semibold">Socian AI Helps</h2>

        {current === 2 ? (
          <>
            <h2 className="flex flex-col font-light tracking-widest  grow justify-center">
              <span className="block leading-14 pb-9 text-4xl text-white/[.3] font-thin action-2">
                01
              </span>

              <span className={`action-3 md:text-6xl text-5xl leading-[60px]`}>
                <span>Every</span>
                <br />
                <span>Data</span>
                <br />
                <span>Actionable</span>
              </span>
            </h2>
          </>
        ) : (
          <>
            <h2 className="flex flex-col font-light tracking-widest  grow justify-center">
              <span className="block leading-14 pb-9 text-4xl text-white/[.3] font-thin action-2">
                02
              </span>
              <span className={`action-3 md:text-6xl text-5xl leading-[60px]`}>
                <span>Automate</span>
                <br />
                <span>Customer</span>
                <br />
                <span>Journey</span>
              </span>
            </h2>
          </>
        )}
      </div>
    </DefaultTemplate>
  );
}

export default SocianAiHelps;
