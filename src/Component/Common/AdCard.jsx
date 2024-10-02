import React from "react";
import adcard from "/images/adcard.png";

const AdCard = () => {
  return (
    <div className="smallcard AdCard">
      <div className="img">
        <img src={adcard} alt="" />
      </div>
    </div>
  );
};

export default AdCard;
