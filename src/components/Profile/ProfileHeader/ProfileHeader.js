import { Avatar } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  return (
    <div className={"profile__header"}>
      <div className={"profile__header__pos"}>
        <div className={"profile__header__wrapper"}></div>
        <div className={"profile__header__avatar"}>
          {props.user === null || props.user.Avatar === "" ? (
            <AccountCircleIcon
              style={{
                width: "170px",
                height: "170px",
                border: "5px solid #fff",
              }}
            />
          ) : (
            <Avatar
              src={props.user.Avatar}
              style={{
                width: "170px",
                height: "170px",
                border: "5px solid #fff",
              }}
            />
          )}

          <div className={"profile__header__photo"}>
            <PhotoCameraIcon />
          </div>
        </div>
        <div className={"profile__header__buttonAddCover"}>
          <PhotoCameraIcon />
          <span>Add Cover Photo</span>
        </div>
      </div>

      <div className={"profile__header__description"}>
        <div className={"profile__header__description__wrapper"}>
          <div className={"profile__header__nameAndSername"}>
            <h1>
              {props.user === null
                ? null
                : `${props.user.Name} ${props.user.Sername}`}
            </h1>
          </div>
          <div className={"profile__header__bio"}>Add Bio</div>
        </div>
      </div>

      <div className={"profile__header__hr"}>
        <hr />
        <div className={"profile__header__lastBlock"}></div>
      </div>
    </div>
  );
};

export default ProfileHeader;
