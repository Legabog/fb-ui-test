import React from "react";
import "./ProfileHeaderAvatarBackground.css";

const ProfileHeaderAvatarBackground = (props) => {
  return (
    <>
      {props.user === null || props.user.AvatarBackground === "" ? (
        <div className={"profile__header__avatarBackground"} ></div>
      ) : (
        <div className={"profile__header__avatarBackground__active__wrapper"}>
          <div className={"profile__header__avatarBackground__active"}>
            <img
              src={
                props.user === null || props.user.AvatarBackground
                  ? props.user.AvatarBackground
                  : null
              }
              alt="description"
            />
          </div>
        </div>
      )}
      <input
        type="file"
        id="avatarBackground-uploader"
        accept="image/x-png, image/gif, image/jpeg, image/jpg"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files[0] !== null) {
            props.avatarBackgroundLoaderBase64Handler(e.target.files[0]);
          }
        }}
      />
    </>
  );
};

export default ProfileHeaderAvatarBackground;
