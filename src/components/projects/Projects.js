import React from "react";
import workImgOne from "../../assets/work/workImgOne.jpg"
import workImgTwo from "../../assets/work/workImgTwo.jpg"
import workImgThree from "../../assets/work/workImgThree.jpg"
import workImgFour from "../../assets/work/workImgFour.jpg"
import workImgFive from "../../assets/work/workImgFive.jpg"
import workImgSix from "../../assets/work/workImgSix.jpg"
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Projects" subTitle="" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Watermeter Reader"
            category="An AI system using OCR technology to read water meter numbers and calculate the water consumption of a household."
            image={workImgThree}
            link="https://ai4ia-watermeter.streamlit.app/"
          />
          <ProjectsCard
            title="Plant Classification"
            category="An AI system for classifying 1000+ different types of plants. Trained on 350k images"
            image={workImgTwo}
            link="https://plant-classification.streamlit.app/"
          />
          <ProjectsCard
            title="Face Analysis"
            category="An AI system to analyze facial landmarks"
            image={workImgFour}
            link="https://faceai-ui.myzens.net/"
          />
        </div>
        <div className="px-6">
        <ProjectsCard
            title="BME10"
            category="A ReactJS-based web application for the BME10 International conference hosted on July 2024" 
            image={workImgOne}
            link="https://bme10.aiotlab.io.vn/"
          />
          <ProjectsCard
            title="Acnes Detection"
            category="An AI system for detecting 12 different types of acne lesions and differential diagnoses"
            image={workImgFive}
            link="https://zalo.me/s/3342509329674911346"
          />
          <ProjectsCard
            title="IU Youth Union Zalo Mini App"
            category="An ReactJS-based application for the IU Youth Union, used together with their website to reach out to the community"
            image={workImgSix}
            link="https://zalo.me/s/1796664865308411670"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
