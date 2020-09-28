import React from "react";
import { Avatar } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeaderAvatar.css";

const ProfileHeaderAvatar = (props) => {
  return (
    <div className={"profile__header__avatar"}>
      {props.user === null || props.user.Avatar === "" ? (
        <Avatar
          style={{
            width: "172px",
            marginTop: "4px",
            marginLeft: "4px",
            height: "172px",
            borderRadius: "172px",
          }}
          onClick={props.toggleWindowAvatar}
        />
      ) : (
        <Avatar
          src={props.user.Avatar}
          style={{
            width: "172px",
            marginTop: "4px",
            marginLeft: "4px",
            height: "172px",
            borderRadius: "172px",
          }}
          onClick={props.toggleWindowAvatar}
        />
      )}

      <div className={"profile__header__photo"}>
        <PhotoCameraIcon />
      </div>
    </div>
  );
};

export default ProfileHeaderAvatar;
