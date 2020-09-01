import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((e) => {
        return (
          <Post
            key={e.id}
            profilePic={e.data.profilePic}
            message={e.data.message}
            timestamp={e.data.timestamp}
            username={e.data.username}
            image={e.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
