import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./Notifications.css";
import Button from "../../Component/Common/Button";
import All from "./All";
import NotiJob from "./NotiJob";
import MyPosts from "./MyPosts";
import Mentions from "./Mentions";
import PromotedCard from "../../Component/Common/PromotedCard";

const Notifications = () => {
  const [tab, setTab] = useState("0");

  const switchTab = (props) => {
    switch (props) {
      case "0":
        return <All />;
      case "1":
        return <NotiJob />;
      case "2":
        return <MyPosts />;
      case "3":
        return <Mentions />;

      default:
        return <All />;
    }
  };
  return (
    <section className="container notifications flex">
      <div className="leftside">
        <div className="smallcard">
          <h4>Manage your</h4>
          <h4>Notifications</h4>
          <a href="">View Settings</a>
        </div>
      </div>
      <div className="main">
        <div className="card_yellow">
          <div className="heading flex">
            <h4>LinkedIn is better on the new Windows app</h4>
            <FiPlus className="icon" />
          </div>
          <p>Never miss a reaction or comment</p>
          <Button btnColor="btnTrans" title="Open the app" />
        </div>
        <div className="card action_btn flex">
          <Button
            btnColor={`btnTrans ${tab == "0" ? "bg_green" : ""}`}
            title="All"
            onClick={() => setTab("0")}
          />
          <Button
            btnColor={`btnTrans ${tab == "1" ? "bg_green" : ""}`}
            title="Jobs"
            onClick={() => setTab("1")}
          />
          <Button
            btnColor={`btnTrans ${tab == "2" ? "bg_green" : ""}`}
            title="My posts"
            onClick={() => setTab("2")}
          />
          <Button
            btnColor={`btnTrans ${tab == "3" ? "bg_green" : ""}`}
            title="Mentions"
            onClick={() => setTab("3")}
          />
        </div>
        {switchTab(tab)}
      </div>
      <div className="rightside">
        <PromotedCard />
      </div>
    </section>
  );
};

export default Notifications;
