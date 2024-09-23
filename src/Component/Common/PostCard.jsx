import React from "react";
import "./Common.css";
import me from "/images/me.jpg";
import post from "/images/post.jpg";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const PostCard = () => {
  return (
    <div className="card">
      <div className="post_author flex">
        <div className="post_author_info flex">
          <img src={me} alt="" />
          <div className="post_author_details">
            <div className="post_author_name">
              Ebuka Moses <span>• st</span>
            </div>
            <div className="post_author_position">
              <span>Blockchain Engineer</span>
            </div>
            <div className="post_author_time">
              <span>
                6m • <BsGlobeAmericas />
              </span>
            </div>
          </div>
        </div>
        <div className="post_calltoaction_btn flex">
          <HiOutlineDotsHorizontal className="calltoaction_icon" />
          <IoClose className="calltoaction_icon" />
        </div>
      </div>
      <div className="post_contents">
        <p className="post_writeup">
          Still, your girl preaching Blockchain 😇 Digital Money Conference
          happened over the weekend. I was happy to connect and share insights
          on blockchain development with the audience.
        </p>
        <div className="post_img">
          <img src={post} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
