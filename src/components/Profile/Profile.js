import React from "react";
import ProfileUpdateAvatar from "../ProfileUpdateAvatar/ProfileUpdateAvatar";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = (props) => {
  return (
    <div className={"profile"}>
      <ProfileHeader {...props} />
      <ProfileUpdateAvatar {...props} />
      <div className={"profile__body"}></div>
    </div>
  );
};

export default Profile;
