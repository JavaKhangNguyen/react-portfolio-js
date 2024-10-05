import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="Resume" subTitle="" />
      <Education />
      <Title title="Skills" subTitle="" />
      <Skills />
    </section>
  );
};

export default Resume;
