import React from "react";
import MobileText from "./MobileText";

function MobilePragraph({ children, className }) {
  return (
    <p className={`${className}`}>
      <MobileText>{children}</MobileText>
    </p>
  );
}

export default MobilePragraph;
