import React, { useEffect, useState } from "react";
import "./HeaderNavigationBar.css";
import HeaderNavigationBarHome from "./HeaderNavigationBarHome/HeaderNavigationBarHome";
import HeaderNavigationBarFriends from "./HeaderNavigationBarFriends/HeaderNavigationBarFriends";
import HeaderNavigationBarGroups from "./HeaderNavigationBarGroups/HeaderNavigationBarGroups";
import { NavLink, useLocation } from "react-router-dom";

const HeaderNavigationBar = (props) => {
  // ----------Help Home
  const [helpHome, setHelpHome] = useState("none");

  const toggleHelpHome = () => {
    helpHome === "none" ? setHelpHome() : setHelpHome("none");
  };

  // ----------Help Friends
  const [helpFriends, setHelpFriends] = useState("none");

  const toggleHelpFriends = () => {
    helpFriends === "none" ? setHelpFriends() : setHelpFriends("none");
  };

  // ----------Help Groups
  const [helpGroups, setHelpGroups] = useState("none");

  const toggleHelpGroups = () => {
    helpGroups === "none" ? setHelpGroups() : setHelpGroups("none");
  };

  //-----------Active link focus

  const location = useLocation();

  const [activeLink, setActiveLink] = useState();

  const toggleActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleActiveLinkAfterRender = () => {
    if (location.pathname === "/") {
      toggleActiveLink("/");
    } else {
      if (location.pathname === "/friends") {
        toggleActiveLink("/friends");
      } else {
        toggleActiveLink("/groups");
      }
    }
  };

  //

  useEffect(() => {
    toggleActiveLinkAfterRender();
  });

  return (
    <div className="header__navigation__bar">
      <NavLink to={"/"}>
        <HeaderNavigationBarHome
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelpHome={toggleHelpHome}
        />
      </NavLink>

      {/* <div className="header__option__home__help" style={{ display: helpHome }}>
        <span>Home</span>
      </div> */}

      <NavLink to={"/friends"}>
        <HeaderNavigationBarFriends
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelp={toggleHelpFriends}
        />
      </NavLink>

      {/* <div
        className="header__option__friends__help"
        style={{ display: helpFriends }}
      >
        <span>Friends</span>
      </div> */}

      <NavLink to={"/groups"}>
        <HeaderNavigationBarGroups
          activeLink={activeLink}
          toggleActiveLink={toggleActiveLink}
          toggleHelp={toggleHelpGroups}
        />
      </NavLink>

      {/* <div
        className="header__option__groups__help"
        style={{ display: helpGroups }}
      >
        <span>Groups</span>
      </div> */}
    </div>
  );
};

export default HeaderNavigationBar;
