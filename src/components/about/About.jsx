import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About Me" subTitle="" />
      <AboutMe />
      <Title title="Fields of Interests" subTitle="" />
      <MyServices />
    </section>
  );
};

export default About;
