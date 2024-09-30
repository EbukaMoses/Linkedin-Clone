import React from "react";
import { HiInformationCircle } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import Button from "./Button";
import me from "/images/me.jpg";

const RecommendCard = () => {
  return (
    <div className="RecommendCard smallcard">
      <div className="header flex">
        <p>Add to your feed</p>
        <HiInformationCircle className="react_icon" />
      </div>
      <div className="body flex">
        <div className="icon">
          <img src={me} alt="" />
        </div>
        <div className="detail">
          <h4>FrontDesk Hiring Alert</h4>
          <p>Company • Technology, Information and Internet</p>
          <Button btnColor="btnTrans" title="Follow" icon={<FiPlus />} />
        </div>
      </div>
      <div className="body flex">
        <div className="icon">
          <img src={me} alt="" />
        </div>
        <div className="detail">
          <h4>FrontDesk Hiring Alert</h4>
          <p>Company • Technology, Information and Internet</p>
          <Button btnColor="btnTrans" title="Follow" icon={<FiPlus />} />
        </div>
      </div>
      <div className="body flex">
        <div className="icon">
          <img src={me} alt="" />
        </div>
        <div className="detail">
          <h4>FrontDesk Hiring Alert</h4>
          <p>Company • Technology, Information and Internet</p>
          <Button btnColor="btnTrans" title="Follow" icon={<FiPlus />} />
        </div>
      </div>
      <div className="body flex">
        <div className="icon">
          <img src={me} alt="" />
        </div>
        <div className="detail">
          <h4>FrontDesk Hiring Alert</h4>
          <p>Company • Technology, Information and Internet</p>
          <Button btnColor="btnTrans" title="Follow" icon={<FiPlus />} />
        </div>
      </div>
      <div className="body flex">
        <div className="icon">
          <img src={me} alt="" />
        </div>
        <div className="detail">
          <h4>FrontDesk Hiring Alert</h4>
          <p>Company • Technology, Information and Internet</p>
          <Button btnColor="btnTrans" title="Follow" icon={<FiPlus />} />
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
