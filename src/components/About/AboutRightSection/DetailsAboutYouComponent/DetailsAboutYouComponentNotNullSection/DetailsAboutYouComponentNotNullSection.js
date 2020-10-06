import React, { useState } from "react";
import "./DetailsAboutYouComponentNotNullSection.css";

import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const DetailsAboutYouComponentNotNullSection = (props) => {
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
      <div className={"DetailsAboutYouComponentNotNullSection"}>
        <props.Icon />
        <div className={"DetailsAboutYouComponentNotNullSection__description"}>
          <span>{props.title}</span>
        </div>
        <div className={"DetailsAboutYouComponentNotNullSection__publicIcon"}>
          <PublicIcon />
        </div>
        <div className={"DetailsAboutYouComponentNotNullSection__edit"}>
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
        className={"DetailsAboutYouComponentNotNullSection__editWindow"}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={
            "DetailsAboutYouComponentNotNullSection__editWindowSection"
          }
        >
          <EditIcon />
          <span>Edit {props.editTitle}</span>
        </div>

        <div
          className={
            "DetailsAboutYouComponentNotNullSection__editWindowSection"
          }
        >
          <DeleteOutlineOutlinedIcon />
          <span>Delete {props.editTitle}</span>
        </div>
      </div>
    </>
  );
};

export default DetailsAboutYouComponentNotNullSection;
