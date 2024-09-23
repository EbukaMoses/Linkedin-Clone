import React, { useState } from "react";
import "./Common.css";
import me from "/images/me.jpg";
import post from "/images/post.jpg";
import { BsGlobeAmericas } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsHandThumbsDown, BsHandThumbsDownFill } from "react-icons/bs";
import { FaRegCommentDots, FaSmile } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { TbBulbFilled } from "react-icons/tb";
import { FaHands, FaHandHoldingHeart, FaHeart } from "react-icons/fa6";
import { GoSmiley } from "react-icons/go";
import { FaRegImage } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const PostCard = () => {
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);
  return (
    <div className="card">
      <div className="post_author flex">
        <div className="post_author_info flex">
          <img src={me} alt="" />
          <div className="post_author_details">
            <div className="post_author_name">
              Ebuka Moses <span>• 1st</span>
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
        <hr className="hr" />
        <div className="post_reactions flex">
          <div className="post_owner flex">
            <img src={me} alt="" />
            <MdArrowDropDown className="post_owner_icon" />
          </div>

          <div className="post_like flex">
            {/* ----------Like Pop up ----------  */}
            <div className="like_hover flex">
              <BsHandThumbsDownFill className="like_hover_icon" />
              <FaHands className="like_hover_icon2" />
              <FaHandHoldingHeart className="like_hover_icon3" />
              <FaHeart className="like_hover_icon4" />
              <TbBulbFilled className="like_hover_icon5" />
              <FaSmile className="like_hover_icon6" />
            </div>
            {/* ------------End of Like pop up------------  */}

            <BsHandThumbsDown className="icon" />
            <span>Like</span>
          </div>

          <div
            className="post_comment flex"
            onClick={() => setShowComment((prev) => !prev)}
          >
            <FaRegCommentDots className="icon" />
            <span>Comment</span>
          </div>

          <div className="post_repost flex">
            <BiRepost className="icon" />
            <span>Repost</span>

            {/* -------REPOST POP DOWN ---------  */}
            <div className="repost_pop flex flex-col">
              <div className="repost_pop_box flex">
                <FaEdit className="repost_icon" />
                <div className="repost_desc flex flex-col">
                  <h6>Repost with your thoughts</h6>
                  <span>Create a new post with Valeries post attached</span>
                </div>
              </div>

              <div className="repost_pop_box flex">
                <BiRepost className="repost_icon" />
                <div className="repost_desc flex flex-col">
                  <h6>Repost</h6>
                  <span>Instantly bring Valeries post to others' feeds</span>
                </div>
              </div>
            </div>
          </div>

          <div className="post_share flex">
            <PiPaperPlaneTiltFill className="icon" />
            <span>Send</span>
          </div>
        </div>
      </div>
      {/* post comment section  */}
      {showComment && (
        <div className="post_make_comment flex">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment...."
          />
          <div className="post_comment_icons flex">
            <GoSmiley className="smile" />
            <FaRegImage className="img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
