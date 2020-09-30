import React from "react";
import { Avatar } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeaderAvatar.css";
import ChangeAvatarSimplePreloader from "../../../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const ProfileHeaderAvatar = (props) => {
  return (
    <div className={"profile__header__avatar"}>
      {props.fetchAvatar 
        ?  <ChangeAvatarSimplePreloader width={"172px"} height={"172px"}/>
        : props.user === null || props.user.Avatars.activeAvatarUrl === "" ? (
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
            src={props.user.Avatars.activeAvatarUrl}
            style={{
              width: "172px",
              marginTop: "4px",
              marginLeft: "4px",
              height: "172px",
              borderRadius: "172px",
            }}
            onClick={props.toggleWindowAvatar}
          />
        )
      }

      <div className={"profile__header__photo"}>
        <PhotoCameraIcon
          onClick={(e) => {
            e.preventDefault();
            props.toggleProfileUpdateAvatar(
              props.profileUpdateVisibility,
              props.profileUpdateOpacity
            );
          }}
        />
      </div>

      <input
        type="file"
        id="avatar-uploader"
        accept="image/x-png, image/gif, image/jpeg, image/jpg"
        onChange={(e) => {
          props.sendAvatar(e.target.files[0], props.user.Avatars.activeAvatarUrl, props.activeAccountEmail);
        }}
      ></input>
    </div>
  );
};

export default ProfileHeaderAvatar;
