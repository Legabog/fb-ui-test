import React from "react";
import "./ProfileUpdateBody.css";
import ProfileUpdateBodySection from "./ProfileUpdateBodySection/ProfileUpdateBodySection";

const ProfileUpdateBody = (props) => {
  return (
    <div className={"prifleUpdateAvatar__body"}>
      <ProfileUpdateBodySection
        avatarsArray={ props.user === null || props.user.Avatars.recentUploads === [] ? [] : props.user.Avatars.recentUploads }
        {...props}
        titleSection={"Recents Uploads"}
      />
      <ProfileUpdateBodySection
        avatarsArray={ props.user === null || props.user.Avatars.pofileAvatars === [] ? [] : props.user.Avatars.pofileAvatars } 
        {...props}
        titleSection={"Profile Pictures"}
      />
    </div>
  );
};

export default ProfileUpdateBody;
