import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./OverviewComponentAddButton.css";

const OverviewComponentAddButton = (props) => {
  return (
    <div className={"OverviewComponent__addButton"}>
      <ControlPointIcon />
      <div className={"OverviewComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default OverviewComponentAddButton;
