import React from "react";
import MoblieNav from "../nav/MoblieNav";

function TemplateWithoutPagenation({ children, NavColor, className }) {
  return (
    <div className="flex flex-col min-h-screen justify-start  overflow-x-hidden">
      <MoblieNav NavColor={NavColor} />
      <div className={`grow flex px-[20px] pt-9 flex-col  ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default TemplateWithoutPagenation;
