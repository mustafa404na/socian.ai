import React from "react";
import MobileButton from "../ui/MobileButton";

function ButtonGroup({ buttons, btnAlign, pageNumber }) {
  return (
    <div
      className={`self-baseline px-5 flex ${
        btnAlign ? "justify-center" : "justify-between"
      } items-center align-middle w-full py-10 gap-4`}
    >
      {buttons &&
        buttons.map((button, index) => (
          <MobileButton
            key={index}
            iconDirecton={button.iconDirecton}
            btnColor={button.btnColor}
          >
            {button.text}
          </MobileButton>
        ))}
    </div>
  );
}

export default ButtonGroup;
