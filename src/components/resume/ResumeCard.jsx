import React from "react";
import PropTypes from "prop-types";
const ResumeCard = ({ badge, title, subTitle, des, className, logo }) => {
  const formatTitle = (title) => {
    return title.split('/').map((part, index, array) => (
      <React.Fragment key={index}>
        {part.trim()}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "" ? (
        <h6 className={`${className}`}>
          2021 - Present {/* Fallback text if badge empty */}
        </h6>
      ) : (
        <h6 className={`${className}`}>
          {badge}
        </h6>
      )}
      <div className="flex">
        {logo && (
          <div className="w-12 h-12 mr-4 flex-shrink-0 mt-1">
            <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
          </div>
        )}
        <div className="flex-grow">
          <h2 className="text-lg font-titleFont text-gray-200 font-medium">
            {formatTitle(title)}
          </h2>
          <p className="text-sm text-[#999] mt-1">{subTitle}</p>
          <p className="text-base text-[#999] font-medium mt-2">{des}</p>
        </div>
      </div>
    </div>
  );
};

ResumeCard.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  des: PropTypes.string,
  className: PropTypes.string,
  logo: PropTypes.string,
}

export default ResumeCard;