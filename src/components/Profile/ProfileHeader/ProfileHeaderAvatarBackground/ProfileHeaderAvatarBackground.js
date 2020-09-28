import React from "react";
import "./ProfileHeaderAvatarBackground.css";

const ProfileHeaderAvatarBackground = (props) => {
  return (
    <>
      {props.user === null || props.user.AvatarBackground === "" ? (
        <div className={"profile__header__avatarBackground"}></div>
      ) : (
        <div className={"profile__header__avatarBackground__active"}>
          <img src={props.user.AvatarBackground} alt="description" />
        </div>
      )}
    </>
  );
};

export default ProfileHeaderAvatarBackground;
