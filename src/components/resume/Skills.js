import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faToolbox, faCheck, faBookBookmark} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faNode} from "@fortawesome/free-brands-svg-icons";
import {
  GitOriginal,
  MaterialuiOriginal,
  MysqlOriginalWordmark,
  NginxOriginal,
  PostmanOriginal,
  ReactOriginal,
  FlaskOriginalWordmark,
  FastapiOriginal,
  TailwindcssOriginal,
  VercelOriginalWordmark,
} from "devicons-react";

import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  const frameworks = [
    {
      icon: <ReactOriginal size="60" />,
    },
    {
      icon: <TailwindcssOriginal size="60" />,
    },
    {
      icon: <MaterialuiOriginal size="60" />,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faNode}
          style={{ width: "60px", height: "60px" }}
        />
      ),
    },
    {
      icon: <NginxOriginal size="60" />,
    },
    {
      icon: <FastapiOriginal size="60" />,
    },
    {
      icon: <FlaskOriginalWordmark size="60" style={{ fill: "white" }} />,
    }, 
    {
      icon: <MysqlOriginalWordmark size="60" />,
    },
    {
      icon: <VercelOriginalWordmark size="60" style={{ fill: "white" }} />,
    },
    {
      icon: <PostmanOriginal size="60" />,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faGithub}
          style={{ width: "60px", height: "60px" }}
        />
      ),
    },
    {
      icon: <GitOriginal size="60" />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Frameworks and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle
          title="Tools & Frameworks"
          icon={<FontAwesomeIcon icon={faToolbox} flip />}
        />
        {/* Frameworks Display */}
        <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 md:gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {framework.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* =============== Frameworks End here ===================== */}

      {/* =============== Experiences Start here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle
          title="Other Experiences"
          icon={<FontAwesomeIcon icon={faBookBookmark} flip />}
        />
        <ul className="py-4 flex flex-col gap-2">
          {[
            "Services Deployments",
            "API Development",
            "AI Training/Integration",
            "Service Desk Support",
          ].map((experience, index) => (
            <li
              key={index}
              className={`flex items-center gap-4 text-textColorborder-b-zinc-800`}
            >
              <span className="text-designColor text-lg">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {experience}
            </li>
          ))}
        </ul>
      </div>

      {/* =============== Coding and Knowledge End here ==================== */}
    </div>
  );
};

export default Skills;
