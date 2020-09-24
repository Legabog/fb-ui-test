import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const SidebarRow = ({
  src,
  Icon,
  title,
  navLink,
  toggleAdditionalSections,
}) => {
  return navLink ? (
    <NavLink to={navLink}>
      <div className="sidebarRow" onClick={toggleAdditionalSections}>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}

        <span>{title}</span>
      </div>
    </NavLink>
  ) : (
    <div className="sidebarRow" onClick={toggleAdditionalSections}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <span>{title}</span>
    </div>
  );
};

export default SidebarRow;
