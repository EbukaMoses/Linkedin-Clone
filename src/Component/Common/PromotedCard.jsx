import React from "react";
import icon from "/images/teleperformance_logo.jpg";
import people from "/images/people.png";
import post from "/images/post.jpg";
import { HiDotsHorizontal } from "react-icons/hi";

const PromotedCard = () => {
  return (
    <div className="PromotedCard">
      <div className="header flex">
        <img src={post} alt="" className="bg" />
        <div>
          <img src={icon} alt="" className="dp" />
        </div>
        <p className="flex">
          Promoted
          <span>
            <HiDotsHorizontal />
          </span>
        </p>
      </div>
      <div className="detail">
        <h5>Teleperformance</h5>
        <p>
          Ebuka, get the latest on <strong>Teleperformance</strong> News, Jobs,
          and More!
        </p>
        <span>Ebuka, stay informed on industry news and trends</span>
        <div className="people flex">
          <img src={people} alt="" />
          <span>
            <strong>Ibrahim Muideen Tunde ITILv4, ISO,</strong> & 51 other
            connections also follow
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotedCard;
