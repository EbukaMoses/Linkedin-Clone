import React from "react";
import me from "/images/me.jpg";
import { MdArrowDropDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const PostModal = () => {
  return (
    <div className="modal_out">
      <div className="modal_card">
        <div className="header flex">
          <div className="author">
            <img src={me} alt="" />
            <div className="name">
              <div className="flex">
                <h2>John Doe</h2>
                <span>
                  <MdArrowDropDown />
                </span>
              </div>
              <span>Post to Anyone</span>
            </div>
          </div>
          <IoCloseSharp />
        </div>
        <div className="textarea">
          <textarea
            name=""
            id=""
            placeholder="What do you want to talk about?"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
