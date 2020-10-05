import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./PlacedLivedComponentAddButton.css";

const PlacedLivedComponentAddButton = (props) => {
  return (
    <div className={"PlacedLivedComponent__addButton"}>
      <ControlPointIcon />
      <div className={"PlacedLivedComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default PlacedLivedComponentAddButton;
