import React from "react";
import job from "/images/job.png";

const Mentions = () => {
  return (
    <div className="card myposts flex flex-col">
      <img src={job} alt="" />
      <h3>No new mentions</h3>
      <p>
        When someone tags you in a post or comment, that notification will
        appear here.
      </p>
    </div>
  );
};

export default Mentions;
