import React, { useState } from "react";
import me from "/images/me.jpg";
import { MdArrowDropDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { FaRegImage, FaRegCalendarDays } from "react-icons/fa6";
import { GiWaxSeal } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import Button from "./Button";

const PostModal = ({ setPost }) => {
  const [textarea, setTextarea] = useState("");
  return (
    <div className="modal_out">
      <div className="modal_card">
        <div className="modal_card_header flex">
          <div className="postmodal_author flex">
            <img src={me} alt="" />
            <div className="name">
              <div className="flex">
                <h2>John Doe</h2>
                <span>
                  <MdArrowDropDown />
                </span>
              </div>
              <p>Post to Anyone</p>
            </div>
          </div>
          <IoCloseSharp
            className="close_modal"
            onClick={(e) => setPost(false)}
          />
        </div>

        <div className="postmodal_textarea">
          <textarea
            name=""
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            placeholder="What do you want to talk about?"
          ></textarea>
        </div>
        <div className="smile_emoji">
          <FaRegSmile title="Open Emoji Keyboard" />
        </div>
        <div className="reaction flex">
          <FaRegImage title="Add Media" />
          <FaRegCalendarDays title="Create an event" />
          <GiWaxSeal title="Celebrate an occassion" />
          <FiPlus title="More" />
        </div>
        <hr className="hr" />
        <div className="post_btn flex">
          <IoMdTime className="time" title="Schedule for later" />
          <Button
            btnColor="btnColor"
            disabled={textarea.length <= 5 ? "disabled" : ""}
            title="Post"
          />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
