import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HelpIcon from "@material-ui/icons/Help";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./ButtonAccountMenuWrapper.css";
import { TrendingUpTwoTone } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const ButtonAccountMenuWrapper = (props) => {
  const history = useHistory();

  const [themeSwitcher, switchTheme] = useState(false);

  const toggleSwitcher = () => {
    themeSwitcher ? switchTheme(false) : switchTheme(TrendingUpTwoTone);
  };

  return (
    <div
      className={"button__account__menu__wrapper"}
      style={
        props.activeButton === 3
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__account__menu__header">
        <NavLink to={"/profile"}>
          <div className="buttonAccount__section__border">
            <div className="buttonAccount__section__icon">
              {props.user && props.user.Avatars.activeAvatarUrl === "" ? (
                <AccountCircleIcon />
              ) : (
                <Avatar
                  style={{ width: "60px", height: "60px" }}
                  src={
                    props.user && props.user.Avatars.activeAvatarUrl
                      ? props.user.Avatars.activeAvatarUrl
                      : null
                  }
                />
              )}
            </div>
            <div className="buttonAccount__section__accountDescription">
              <div className="buttonAccount__section__accountName">
                <span>
                  {props.user
                    ? `${props.user.Name} ${props.user.Sername}`
                    : null}
                </span>
              </div>

              <div className="buttonAccount__section__description">
                <span>See your profile</span>
              </div>
            </div>
          </div>
        </NavLink>

        <hr />

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <AnnouncementIcon
              onClick={() => {
                props.changeAvatarHandler(
                  "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2FAvatar.jpg?alt=media&token=ec758273-4c40-4133-8c03-0bd23a88f428",
                  props.activeAccountEmail
                );
              }}
            />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Give Feedback</span>
            </div>

            <div className="buttonAccount__section__info-secondary">
              <span>Help us improve the new Facebook.</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <SettingsIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Settings & Privacy</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Set everything up for yourself.</span>
            </div>
          </div>
          <div className="buttonAccount__section__arrowLeft">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="buttonAccount__menu__section">
          <div className="buttonAccount__menu__section__icon">
            <HelpIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Help & Support</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Ask your questions.</span>
            </div>
          </div>
          <div className="buttonAccount__section__arrowLeft">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="buttonAccount__menu__section" onClick={toggleSwitcher}>
          <div className="buttonAccount__menu__section__icon">
            <Brightness2Icon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Dark mode</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Switcher</span>
            </div>
          </div>
          <div className="buttonAccount__section__switcher">
            <label className="buttonAccount__switch">
              <input
                id="themeSwitcher"
                type="checkbox"
                checked={themeSwitcher}
                onChange={() => {
                  console.log("Switch!!!");
                }}
              />
              <span className="buttonAccount__slider__round"></span>
            </label>
          </div>
        </div>

        <div
          className="buttonAccount__menu__section"
          onClick={() => {
            props.logoutButton();
            history.push("/");
          }}
        >
          <div className="buttonAccount__menu__section__icon">
            <ExitToAppIcon />
          </div>
          <div className="buttonAccount__section__info">
            <div className="buttonAccount__section__info-main">
              <span>Log Out</span>
            </div>
            <div className="buttonAccount__section__info-secondary">
              <span>Exit from account.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonAccountMenuWrapper;
