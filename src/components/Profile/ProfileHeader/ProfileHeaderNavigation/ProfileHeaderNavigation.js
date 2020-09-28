import React from "react";
import "./ProfileHeaderNavigation.css";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ProfileHeaderNavigationButton from "./ProfileHeaderNavigationButton/ProfileHeaderNavigationButton";
import ProfileHeaderNavigationItem from "./ProfileHeaderNavigationItem/ProfileHeaderNavigationItem";
import ProfileHeaderNavigationItemSpecial from "./ProfileHeaderNavigationItemSpecial/ProfileHeaderNavigationItemSpecial";

const ProfileHeaderNavigation = (props) => {

  return (
    <div className={"profile__header__navigation__wrap"}>
      <div className={"profile__header__navigation"}>
        <div className={"profile__header__navigationBar"}>
          <ProfileHeaderNavigationItem
            title={"Timeline"}
            NavLink={"/profile"}
          />
          <ProfileHeaderNavigationItem
            title={"About"}
            NavLink={"/profile/about"}
          />
          <ProfileHeaderNavigationItem
            title={"Friends"}
            NavLink={"/profile/friends"}
          />
          <ProfileHeaderNavigationItem
            title={"Photos"}
            NavLink={"/profile/photos"}
 
          />
          <ProfileHeaderNavigationItem
            title={"Archive"}
            NavLink={"/profile/archive"}

          />
          <ProfileHeaderNavigationItem
            title={"Videos"}
            NavLink={"/profile/videos"}

          />
          <ProfileHeaderNavigationItemSpecial
            title={"More"}
            NavLink={"/profile/more"}
            icon={ArrowDropDownIcon}
          />
        </div>

        <div className={"profile__header__buttonPanel"}>
          <ProfileHeaderNavigationButton
            title={"Edit profile"}
            icon={CreateIcon}
          />
          <ProfileHeaderNavigationButton icon={VisibilityIcon} />
          <ProfileHeaderNavigationButton icon={SearchIcon} />
          <ProfileHeaderNavigationButton icon={MoreHorizIcon} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderNavigation;
