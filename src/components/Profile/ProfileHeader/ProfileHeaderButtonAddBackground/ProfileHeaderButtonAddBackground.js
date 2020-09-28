import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeaderButtonAddBackground.css";

const ProfileHeaderButtonAddBackground = (props) => {
  return (
    <div className={"profile__header__buttonAddCover"}>
      <PhotoCameraIcon />
      <span>Add Cover Photo</span>
    </div>
  );
};

export default ProfileHeaderButtonAddBackground;
