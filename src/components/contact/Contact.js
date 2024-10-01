import React from "react";
import Title from "../home/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="w-full">
      <Title title="Nguyen Phuc Khang" subTitle=" - Reach me here" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-900 text-base font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faPhoneVolume} shake className="mr-2" /> Phone
            </span>
            0913324868
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-900 text-base font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} beat className="mr-2" /> Email
            </span>
            khang2073@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
