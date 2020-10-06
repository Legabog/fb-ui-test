import React, { useState } from "react";
import "./ContactAndBasicInfoComponentNotNullSection.css";

import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const ContactAndBasicInfoComponentNotNullSection = (props) => {
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
      <div className={"ContactAndBasicInfoComponentNotNullSection"}>
        <props.Icon />
        <div
          className={"ContactAndBasicInfoComponentNotNullSection__description"}
        >
          <span>{props.title}</span>
        </div>
        <div
          className={"ContactAndBasicInfoComponentNotNullSection__publicIcon"}
        >
          <PublicIcon />
        </div>
        <div className={"ContactAndBasicInfoComponentNotNullSection__edit"}>
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
        className={"ContactAndBasicInfoComponentNotNullSection__editWindow"}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={
            "ContactAndBasicInfoComponentNotNullSection__editWindowSection"
          }
        >
          <EditIcon />
          <span>Edit {props.editTitle}</span>
        </div>

        <div
          className={
            "ContactAndBasicInfoComponentNotNullSection__editWindowSection"
          }
        >
          <DeleteOutlineOutlinedIcon />
          <span>Delete {props.editTitle}</span>
        </div>
      </div>
    </>
  );
};

export default ContactAndBasicInfoComponentNotNullSection;
