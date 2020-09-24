import React, { useState } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ChatIcon from "@material-ui/icons/Chat";
import GitHubIcon from "@material-ui/icons/GitHub";
import PeopleIcon from "@material-ui/icons/People";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import GamesIcon from "@material-ui/icons/Games";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WorkIcon from "@material-ui/icons/Work";
import FlagIcon from "@material-ui/icons/Flag";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Sidebar = (props) => {
  const [additionalSections, setAdditionalSections] = useState(false);

  const toggleAdditionalSections = () => {
    additionalSections
      ? setAdditionalSections(false)
      : setAdditionalSections(true);
  };

  return (
    <div className="sidebar">
      <SidebarRow Icon={AccountCircleIcon} title={"Oleg Dosov"} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiPeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={GitHubIcon} title="Welcome" />
      <SidebarRow Icon={PeopleIcon} title="Groups" />
      <SidebarRow Icon={LibraryMusicIcon} title="Music" navLink={"/music"} />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      {additionalSections ? (
        <>
          <SidebarRow Icon={GamesIcon} title="Games" />
          <SidebarRow Icon={SportsEsportsIcon} title="Esports Streams" />
          <SidebarRow Icon={WorkIcon} title="Jobs" />
          <SidebarRow Icon={FlagIcon} title="Pages" />
          <SidebarRow Icon={WbSunnyIcon} title="Weather" />
          <SidebarRow
            Icon={ExpandLessIcon}
            title="See Less"
            toggleAdditionalSections={toggleAdditionalSections}
          />
        </>
      ) : (
        <SidebarRow
          Icon={ExpandMoreOutlined}
          title="See More"
          toggleAdditionalSections={toggleAdditionalSections}
        />
      )}
    </div>
  );
};

export default Sidebar;
