import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./WorkAndEducationComponentAddButton.css";

const WorkAndEducationComponentAddButton = (props) => {
  return (
    <div className={"WorkAndEducationComponent__addButton"}>
      <ControlPointIcon />
      <div className={"WorkAndEducationComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default WorkAndEducationComponentAddButton;
