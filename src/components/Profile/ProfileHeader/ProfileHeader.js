import React, { useState } from "react";
import "./ProfileHeader.css";

import ProfileHeaderNavigation from "./ProfileHeaderNavigation/ProfileHeaderNavigation";
import ProfileHeaderAvatarBackground from "./ProfileHeaderAvatarBackground/ProfileHeaderAvatarBackground";
import ProfileHeaderAvatar from "./ProfileHeaderAvatar/ProfileHeaderAvatar";
import ProfileHeaderButtonAddBackground from "./ProfileHeaderButtonAddBackground/ProfileHeaderButtonAddBackground";
import ProfileHeaderAvatarWindow from "./ProfileHeaderAvatarWindow/ProfileHeaderAvatarWindow";
import ProfileHeaderDescription from "./ProfileHeaderDescription/ProfileHeaderDescription";

const ProfileHeader = (props) => {
  const [windowAvatarVisibility, setWindowAvatarVisibility] = useState(
    "hidden"
  );

  const [windowAvatarOpacity, setWindowAvatarOpacity] = useState(0);

  const toggleWindowAvatar = () => {
    windowAvatarVisibility === "hidden"
      ? setWindowAvatarVisibility("visible")
      : setWindowAvatarVisibility("hidden");

    windowAvatarOpacity === 0
      ? setWindowAvatarOpacity(1)
      : setWindowAvatarOpacity(0);
  };

  return (
    <div className={"profile__header"}>
      <div className={"profile__header__pos"}>
        <ProfileHeaderAvatarBackground {...props} />
        <ProfileHeaderAvatar
          {...props}
          toggleWindowAvatar={toggleWindowAvatar}
        />
        <ProfileHeaderButtonAddBackground />
      </div>

      <ProfileHeaderAvatarWindow
        {...props}
        toggleWindowAvatar={toggleWindowAvatar}
        windowAvatarVisibility={windowAvatarVisibility}
        windowAvatarOpacity={windowAvatarOpacity}
      />

      <ProfileHeaderDescription {...props} />

      <div className={"profile__header__hr"}>
        <hr />
        <div className={"profile__header__lastBlock"}></div>
      </div>

      <ProfileHeaderNavigation />
    </div>
  );
};

export default ProfileHeader;
