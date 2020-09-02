import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import db from "../../../utils/firebase/firebase";
import firebase from "firebase";

const MessageSender = (props) => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const imageUrlHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: props.user.photoURL,
      username: props.user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={"https://avatars0.githubusercontent.com/u/44378669?s=460&u=079ef1f1a38cec38b2b6ba37b9f71cfccc88ce1f&v=4"} />
        <form>
          <input
            value={input}
            onChange={inputHandler}
            className="messageSender__input"
            type="text"
            placeholder={`Type some message, legabog`}
          />
          <input
            value={imageUrl}
            onChange={imageUrlHandler}
            type="text"
            placeholder="ImageUrl"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
