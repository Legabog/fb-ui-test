import React from "react";
import "./ProfileUpdateAvatar.css";
import BackDrop from "../common/BackDrop/BackDrop";
import ProfileUpdateHeader from "./ProfileUpdateHeader/ProfileUpdateHeader";
import ProfileUpdateBody from "./ProfileUpdateBody/ProfileUpdateBody";
import ChangeAvatarSimplePreloader from "../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const ProfileUpdateAvatar = (props) => {
  return (
    <div
      className={"prifleUpdateAvatar__wrapper"}
      style={{
        visibility: props.profileUpdateVisibility,
        opacity: props.profileUpdateOpacity,
      }}
    >
      <div className={"prifleUpdateAvatar"}>
        <ProfileUpdateHeader {...props} />
        {props.fetchProfileAvatars ? (
          <ChangeAvatarSimplePreloader height={"100px"} />
        ) : (
          <ProfileUpdateBody {...props} />
        )}
      </div>
      <BackDrop
        onClick={(e) => {
          e.preventDefault();
          props.toggleProfileUpdateAvatar(
            props.profileUpdateVisibility,
            props.profileUpdateOpacity
          );
        }}
      />
    </div>
  );
};

export default ProfileUpdateAvatar;
