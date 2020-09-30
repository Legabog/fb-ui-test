import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ChangeAvatarSimplePreloader from "../../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const SidebarRow = ({
  src,
  Icon,
  title,
  navLink,
  fetchAvatar,
  toggleAdditionalSections,
}) => {
  return navLink ? (
    <NavLink to={navLink}>
      <div className="sidebarRow" onClick={toggleAdditionalSections}>
        {fetchAvatar ? (
          <ChangeAvatarSimplePreloader width={"32px"} height={"32px"} />
        ) : (
          (src && <Avatar src={src} />) || (Icon && <Icon />)
        )}

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
