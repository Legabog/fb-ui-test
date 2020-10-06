import React, { useState } from "react";
import "./PlacedLivedComponentNotNullSection.css";

import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const PlacedLivedComponentNotNullSection = (props) => {
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
      <div className={"PlacedLivedComponentNotNullSection"}>
        <props.Icon />
        <div className={"PlacedLivedComponentNotNullSection__description"}>
          <span>{props.title}</span>
        </div>
        <div className={"PlacedLivedComponentNotNullSection__publicIcon"}>
          <PublicIcon />
        </div>
        <div className={"PlacedLivedComponentNotNullSection__edit"}>
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
        className={"PlacedLivedComponentNotNullSection__editWindow"}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={"PlacedLivedComponentNotNullSection__editWindowSection"}
        >
          <EditIcon />
          <span>Edit {props.editTitle}</span>
        </div>

        <div
          className={"PlacedLivedComponentNotNullSection__editWindowSection"}
        >
          <DeleteOutlineOutlinedIcon />
          <span>Delete {props.editTitle}</span>
        </div>
      </div>
    </>
  );
};

export default PlacedLivedComponentNotNullSection;
