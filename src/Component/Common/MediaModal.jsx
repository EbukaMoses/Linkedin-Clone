import React from "react";
import Button from "./Button";
import mediaImg from "/images/media.png";
import { IoCloseSharp } from "react-icons/io5";

const MediaModal = ({ setMedia }) => {
  const selectFile = () => {
   document.getElementById("mediaInput").click();
  };
  return (
    <div className="modalOverlay">
      <div className="modalCard">
        {/* -----------MODAL HEADER -----------------  */}
        <div className="modalHeader flex">
          <div className="flex">
            <h3> Send Chris Ani’s Post</h3>
          </div>
          <IoCloseSharp
            className="close_modal"
            onClick={(e) => setMedia(false)}
          />
        </div>
        {/* --------MODAL BODY ---------  */}
        <div className="modalBody mediaBody">
          <div className="modalMedia">
            <img src={mediaImg} alt="" />
            <h4>Select files to begin</h4>
            <p>Share images or a single video in your post.</p>
            <Button
              btnColor="btnColor mediaBtn"
              onClick={selectFile}
              title="Upload from computer"
            />
            <input type="file" name="" id="mediaInput" />
          </div>
        </div>
        {/* --------MODAL FOOTER -----  */}
        <div className="modalFooter flex">
          <div className="modalFooterBtn flex">
            <Button btnColor="btnColor" title="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaModal;
