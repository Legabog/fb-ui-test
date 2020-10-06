import React, { useState } from "react";
import "./LifeEventsComponentNullSection.css";

import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const LifeEventsComponentNullSection = (props) => {
  const [editWindowVisibility, setEditWindowVisibility] = useState("hidden");
  const [editWindowOpacity, setEditWindowOpacity] = useState(0);

  const toggleEditWindow = (boolean) => {
    boolean
      ? setEditWindowVisibility("visible")
      : setEditWindowVisibility("hidden");

    boolean ? setEditWindowOpacity(1) : setEditWindowOpacity(0);
  };

  return (
    <>
      <div className={"LifeEventsComponentNullSection"}>
        <props.Icon />
        <div className={"LifeEventsComponentNullSection__description"}>
          <span>{props.title}</span>
        </div>
        <div className={"LifeEventsComponentNullSection__publicIcon"}>
          <PublicIcon />
        </div>
        <div className={"LifeEventsComponentNullSection__edit"}>
          <MoreHorizIcon
            onClick={() => {
              editWindowVisibility === "hidden"
                ? toggleEditWindow(true)
                : toggleEditWindow(false);
            }}
          />
        </div>
      </div>

      <div
        className={"LifeEventsComponentNullSection__editWindow"}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div className={"LifeEventsComponentNullSection__editWindowSection"}>
          <EditIcon />
          <span>Edit {props.editTitle}</span>
        </div>

        <div className={"LifeEventsComponentNullSection__editWindowSection"}>
          <DeleteOutlineOutlinedIcon />
          <span>Delete {props.editTitle}</span>
        </div>
      </div>
    </>
  );
};

export default LifeEventsComponentNullSection;
