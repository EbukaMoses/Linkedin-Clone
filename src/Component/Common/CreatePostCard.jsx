import React, { useState } from "react";
import "./Common.css";
import me from "/images/me.jpg";
import { FaImage } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
import { PiArticleNyTimesFill } from "react-icons/pi";
import PostModal from "./PostModal";

const CreatePostCard = () => {
  const [post, setPose] = useState(false);
  return (
    <div className="card postModal">
      {/* --------------MAKE POST MODAL -------------  */}
      {post && <PostModal />}
      <div className="makepost_img flex">
        <img src={me} alt="" />
        <div className="makepost" onClick={() => setPose(true)}>
          Start a post, try writing with AI
        </div>
      </div>
      <div className="article flex">
        <div className="article_sub flex">
          <FaImage className="article_icon" />
          <span>Media</span>
        </div>
        <div className="article_sub flex">
          <MdPostAdd className="article_icon2" />
          <span>Contribute expertise</span>
        </div>
        <div className="article_sub flex">
          <PiArticleNyTimesFill className="article_icon3" />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
