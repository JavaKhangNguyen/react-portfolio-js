import React from "react";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-4 px-4 flex flex-col items-center gap-1.5 sm:gap-1.4 md:gap-1.6 lg:gap-2 borderRight borderBottom">
      <span className="text-4xl text-designColor mb-2">{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
