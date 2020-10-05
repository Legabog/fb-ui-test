import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./ContactAndBasicInfoComponentAddButton.css";

const ContactAndBasicInfoComponentAddButton = (props) => {
  return (
    <div className={"ContactAndBasicInfoComponent__addButton"}>
      <ControlPointIcon />
      <div className={"ContactAndBasicInfoComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default ContactAndBasicInfoComponentAddButton;
