import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import me from "/images/me.jpg";

const All = () => {
  return (
    <div className="notifi_card flex flex-col">
      <div className="all_card flex">
        <div className="dot flex">
          <GoDotFill />
        </div>
        <div className="img">
          <img src={me} alt="" />
        </div>
        <div className="details flex">
          <p>
            Suggested for you: You need to serve a 3-month notice period, but
            the company can terminate you without any prior notice. Your hike
            depends on your previous salary, no matter how talented you are.
          </p>
          <div className="action_time flex flex-col">
            <span>21m</span>
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
      <div className="all_card flex">
        <div className="dot flex">
          <GoDotFill />
        </div>
        <div className="img">
          <img src={me} alt="" />
        </div>
        <div className="details flex">
          <p>
            Suggested for you: You need to serve a 3-month notice period, but
            the company can terminate you without any prior notice. Your hike
            depends on your previous salary, no matter how talented you are.
          </p>
          <div className="action_time flex flex-col">
            <span>21m</span>
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
