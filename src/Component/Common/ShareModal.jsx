import React, { useState } from "react";
import me from "/images/me.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { TiNews } from "react-icons/ti";
import Button from "./Button";

const ShareModal = ({ setShare }) => {
const [shareComment, setShareComment] = useState(false)
  return (
    <>
      <div className="modalOverlay">
        <div className="modalCard">
          {/* -----------MODAL HEADER -----------------  */}
          <div className="modalHeader flex">
            <div className="flex">
              <h3> Send Chris Ani’s Post</h3>
            </div>
            <IoCloseSharp
              className="close_modal"
              onClick={(e) => setShare(false)}
            />
          </div>
          {/* --------MODAL BODY ---------  */}
          <div className="modalBody">
            <div className="share_postmodal_input">
              <input type="text" placeholder="Type a name"></input>
            </div>
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input
                  type="checkbox"
                  name=""
                  className="share_check_box"
                  onChange={() => setShareComment(!shareComment)}
                />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
            {/* -----------------members------------------  */}
            <div className="share_postmodal_users flex">
              <img src={me} alt="" />
              <div className="name flex">
                <div className="name_detail">
                  <h2>John Doe</h2>
                  <p>Post to Anyone</p>
                </div>
                <input type="checkbox" name="" className="share_check_box" />
              </div>
            </div>
            {/* ----------------end of members--------------- */}
          </div>
          {/* --------MODAL FOOTER -----  */}
          <div className="modalFooter flex flex-col">
            {shareComment && (
              <div className="modalFooter_Sharecomment">
                <textarea
                  name=""
                  className="share_comment_input"
                  placeholder="Write a message"
                ></textarea>
                <div className="modalFooter_Sharecomment_footer flex">
                  <TiNews /> <span>Post by Chris Ani’s</span>
                </div>
              </div>
            )}

            <div className="modalFooterBtn flex">
              <Button btnColor="btnColor" title="Send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
