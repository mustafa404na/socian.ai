import React from "react";
import AboutHeading from "./AboutHeading";
import Container from "./Container";

function AboutSection({ id, children, title, textColor, className }) {
  return (
    <section
      id={id}
      className={`flex flex-col sm:flex-col font-light tracking-widest min-h-screen align-middle items-center xl:pt-[150px] pt-[100px] justify-start scrollElement  ${
        textColor == "black" ? "bg-white" : ""
      }`}
    >
      <Container>
        <AboutHeading color={textColor}>{title}</AboutHeading>
        <div
          className={`flex grow flex-col xl:pt-20 lg:flex-row w-full justify-center align-middle ${
            className ? className : ""
          }`}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
