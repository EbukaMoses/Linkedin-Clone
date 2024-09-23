import React from "react";
import CreatePostCard from "./../Component/Common/CreatePostCard";
import PostCard from "../Component/Common/PostCard";

const Feed = () => {
  return (
    <section className="container flex">
      <div className="leftside">left</div>
      <div className="main">
        <CreatePostCard />
        <PostCard />
      </div>
      <div className="rightside">right</div>
    </section>
  );
};

export default Feed;
