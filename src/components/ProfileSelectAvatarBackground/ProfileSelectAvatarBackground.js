import React from "react";
import BackDrop from "../common/BackDrop/BackDrop";
import "./ProfileSelectAvatarBackground.css";
import ProfileSelectAvatarBackgroundBody from "./ProfileSelectAvatarBackgroundBody/ProfileSelectAvatarBackgroundBody";
import ProfileSelectAvatarBackgroundHeader from "./ProfileSelectAvatarBackgroundHeader/ProfileSelectAvatarBackgroundHeader";

const ProfileSelectAvatarBackground = (props) => {
  return (
    <div
      className={"prifleSelectAvatarBackground__wrapper"}
      style={{
        visibility: props.profileSelectVisibility,
        opacity: props.profileSelectOpacity,
      }}
    >
      <div className={"prifleSelectAvatarBackground"}>
        <ProfileSelectAvatarBackgroundHeader {...props} />
        <ProfileSelectAvatarBackgroundBody {...props} />
      </div>
      <BackDrop
        onClick={() => {
          props.toggleProfileSelectAvatarBackground(
            props.profileSelectVisibility,
            props.profileSelectOpacity
          );
        }}
      />
    </div>
  );
};

export default ProfileSelectAvatarBackground;
