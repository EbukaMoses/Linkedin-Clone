import React from "react";
import Button from "../../Component/Common/Button";
import job from "/images/job.png"

const MyPosts = () => {
  return (
    <div className="card myposts flex flex-col">
      <img src={job} alt="" />
      <h3>No new post activities</h3>
      <p>View your previous post activity on your profile</p>
          <div className="mypost_btn">
         <Button btnColor="btnTrans" title="View previous activity" />
     </div>
    </div>
  );
};

export default MyPosts;
