import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiGroup3Fill } from "react-icons/ri";

const RecentCard = () => {
  return (
    <div className="smallcard">
      {/* <div className="recent_header flex"></div> */}
      <div className="recent_body ">
        <div className="topic flex">
          <h6>Recent</h6>
          <IoIosArrowDown className="react_icon" />
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
        <div className="sub_topic flex">
          <RiGroup3Fill className="react_icon" />
          <h6>REcent Blockchain web3</h6>
        </div>
      </div>
      <div className="recent_footer flex">
        <p>Discover more</p>
      </div>
    </div>
  );
};

export default RecentCard;
