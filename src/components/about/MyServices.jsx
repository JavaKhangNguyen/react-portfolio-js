import React from "react";
import ServicesCard from "./ServicesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTicket, faListCheck, faRobot } from "@fortawesome/free-solid-svg-icons";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<FontAwesomeIcon icon={faLaptopCode} beat/>}
        title="Web Development"
        subTitle=""
      />
      <ServicesCard
        icons={<FontAwesomeIcon icon={faTicket} flip />}
        title="Service Desk Engineering"
        subTitle=""
      />
      <ServicesCard
        icons={<FontAwesomeIcon icon={faListCheck} bounce />}
        title="QA/QC Testing"
        subTitle=""
      />
      <ServicesCard
        icons={<FontAwesomeIcon icon={faRobot} spin/>}
        title="AI Engineering"
        subTitle=""
      />
    </div>
  );
};

export default MyServices;
