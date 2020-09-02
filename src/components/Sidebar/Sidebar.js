import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from "@material-ui/icons"

const Sidebar = (props) => {

  return <div className="sidebar">
      <SidebarRow src={"https://avatars0.githubusercontent.com/u/44378669?s=460&u=079ef1f1a38cec38b2b6ba37b9f71cfccc88ce1f&v=4"} title={"legabog"} />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon}  title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
  </div>;
};

export default Sidebar;
