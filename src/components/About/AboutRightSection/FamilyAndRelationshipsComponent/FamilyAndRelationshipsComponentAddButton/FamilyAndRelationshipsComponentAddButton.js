import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./FamilyAndRelationshipsComponentAddButton.css";

const FamilyAndRelationshipsComponentAddButton = (props) => {
  return (
    <div className={"FamilyAndRelationshipsComponent__addButton"}>
      <ControlPointIcon />
      <div className={"FamilyAndRelationshipsComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default FamilyAndRelationshipsComponentAddButton;
