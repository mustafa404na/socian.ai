import React from "react";

function MobileText({ children, className }) {
  return (
    <>
      <span className={` ${className}`}>{children}</span>
    </>
  );
}

export default MobileText;
