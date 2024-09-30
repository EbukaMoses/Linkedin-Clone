import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import me from "/images/me.jpg";
import Button from "../../Component/Common/Button";

const NotiJob = () => {
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
          <div className="">
            <p>
              Suggested for you: You need to serve a 3-month notice period, but
              the company can terminate you without any prior notice. Your
            </p>
            <Button btnColor="btnTrans" title="View jobs" />
          </div>
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
          <div>
            <p>
              <strong>Algorand Foundation</strong> is promoting a high priority
              Developer Relations Engineer role in EMEA that matches your job
              alert.
            </p>
            <Button btnColor="btnTrans" title="View jobs" />
          </div>
          <div className="action_time flex flex-col">
            <span>21m</span>
            <HiDotsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotiJob;
