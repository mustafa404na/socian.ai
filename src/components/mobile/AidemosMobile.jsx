import React from "react";
import DefaultTemplate from "./template/DefaultTemplate";

function AidemosMobile(props) {
  return (
    <>
      <DefaultTemplate className={`flex-col`}>
        <iframe
          src="https://socian.ai:8080/"
          style={{
            minHeight: "100vh",
          }}
          width="100%"
          title="Iframe Example"
        ></iframe>
      </DefaultTemplate>
    </>
  );
}

export default AidemosMobile;
