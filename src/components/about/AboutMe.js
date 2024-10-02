import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Flag from "react-flagkit";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-300 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h1 className="text-lg font-semibold mb-1">Hi! I'm <span className="font-bold">Nguyen Phuc Khang</span></h1>
          <p className="text-base leading-6 ">
            I am a fresh graduate engineer from <span className="font-bold">International University</span>, 
            and I created this portfolio to showcase my work and document my journey as I continue 
            to grow in the IT industry. 
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">
              <FontAwesomeIcon icon={faCakeCandles} className="-ml-2 mr-2" />Year of Birth</span>
            2002
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">
              <FontAwesomeIcon icon={faBriefcase} className="-ml-2 mr-2" />Employment</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">
              <FontAwesomeIcon icon={faLocationDot} className="-ml-2 mr-2" />Address</span>
            Ho Chi Minh City, <Flag className="-ml-6" country="VN" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
