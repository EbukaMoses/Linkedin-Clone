import React from "react";
import post from "/images/post.jpg";
import me from "/images/me.jpg";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

const SmallProfileCard = () => {
  return (
    <div className="smallcard">
      <div className="small_profile_card_header flex flex-col">
        <img src={post} alt="" className="coverImg" />
        <img src={me} alt="" className="profileImg" />
        <Link to="">
          <h3>Ebuka Moses</h3>
        </Link>
        <span>
          Frontend Developer | JavaScript, React, Typescript , Tailwind CSS |
          Building Responsive Web Applications
        </span>
      </div>
      <div className="small_profile_card_body">
        <h6 className="flex h6">
          Profile viewers <span>12</span>
        </h6>
        <h6> View all analytics</h6>
      </div>
      <div className="small_profile_card_footer flex">
        <BsFillBookmarkFill />
        <h6>Saved items</h6>
      </div>
    </div>
  );
};

export default SmallProfileCard;
