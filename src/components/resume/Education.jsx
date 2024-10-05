import React from "react";
import ResumeTitle from "./ResumeTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faLanguage, faCode } from "@fortawesome/free-solid-svg-icons";
import ResumeCard from "./ResumeCard";
import Flag from "react-flagkit";
import {JavaOriginalWordmark, JavascriptOriginal, PythonOriginalWordmark, TypescriptOriginal} from "devicons-react";
import IU from "../../assets/IU.png";
import AI4IA from "../../assets/AI4IA.jpg";

const Education = () => {
  const proglang = [
    {
      icon: <JavascriptOriginal size="60" />,
    },
    {
      icon: <TypescriptOriginal size="60" />,
    },
    {
      icon: <PythonOriginalWordmark size="60" />,
    },
    {
      icon: <JavaOriginalWordmark  size="60" />,
    },
   
  ]
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<FontAwesomeIcon icon={faBriefcase} flip/>} />
        <ResumeCard
          badge="06/2023 - Present"
          className="text-base text-designColor"
          title="Front-end developer"
          subTitle="AI4IA"
          logo={AI4IA}
          des=""
        />
        <ResumeCard
          badge="09/2023 - 07/2024"
          className="text-base"
          title="Teaching Assistant"
          subTitle="International University"
          logo={IU}
          des=""
        />
        <ResumeCard
          badge="03/2021 - Present"
          className="text-base text-designColor"
          title="IT Helpdesk"
          subTitle="International University"
          logo={IU}
          des=""
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<FontAwesomeIcon icon={faGraduationCap} flip/>} />
        <ResumeCard
          badge="09/2020 - 09/2024"
          className="text-base"
          title="International University"
          subTitle="Bachelor of Engineering in Information Technology"
          logo={IU}
          des="GPA: 80.1/100"
        />
        <div className="mt-6 col-span-9 md:col-span-4">
        <ResumeTitle
          title="Languages"
          icon={<FontAwesomeIcon icon={faLanguage} flip />}
        />
        <ul className="py-4 flex flex-col gap-4 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <Flag country="GB" />
            </span>
            English: IELTS 6.5 Academic
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <Flag country="VN" />
            </span>
            Vietnamese: Native
          </li>
        </ul>
      </div>
      <div className="mt-6 col-span-9 md:col-span-4">
        <ResumeTitle
          title="Programming"
          icon={<FontAwesomeIcon icon={faCode} flip />}
        />
        {/* Programming Languages Display */}
        <div className="py-4 -ml-4 grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-6">
          {proglang.map((lang, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {lang.icon}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Education;
