import React, { useState } from "react";
import CreatePostCard from "./../Component/Common/CreatePostCard";
import PostCard from "../Component/Common/PostCard";
import PostModal from "../Component/Common/PostModal";
import ShareModal from "../Component/Common/ShareModal";
import MediaModal from "../Component/Common/MediaModal";
import SmallProfileCard from "../Component/Common/SmallProfileCard";
import RecentCard from "../Component/Common/RecentCard";
import RecommendCard from "../Component/Common/RecommendCard";

const Feed = () => {
  const [post, setPost] = useState(false);
  const [share, setShare] = useState(false);
  const [media, setMedia] = useState(false);
  return (
    <section className="container flex">
      {/* --------------MAKE POST MODAL -------------  */}
      {/* {post && <PostModal setPost={setPost} />} */}
      {post ? <PostModal setPost={setPost} /> : ""}
      {share ? <ShareModal setShare={setShare} /> : ""}
      {media ? <MediaModal setMedia={setMedia} /> : ""}
      <div className="leftside">
        <SmallProfileCard />
        <RecentCard />
      </div>
      <div className="main">
        <CreatePostCard setPost={setPost} setMedia={setMedia} />
        <PostCard setShare={setShare} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="rightside">
      <RecommendCard />
      </div>
    </section>
  );
};

export default Feed;
