import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ButtonAccount.css";

const ButtonAccount = (props) => {
  // ----------Help Account
  const [helpAccountOpacity, setHelpAccountOpacity] = useState(0);
  const [helpAccountVisibility, setHelpAccountVisibility] = useState("hidden");

  const turnOnAccountHelp = () => {
    setHelpAccountOpacity(1);
    setHelpAccountVisibility("visible");
  };

  const turnOffAccountHelp = () => {
    setHelpAccountOpacity(0);
    setHelpAccountVisibility("hidden");
  };

  const toggleHelpNotifications = (boolean) => {
    boolean ? turnOnAccountHelp() : turnOffAccountHelp();
  };

  //

  return (
    <>
      <div className={"button__account__wrapper"}>
        <div
          className={
            props.activeButton === 3
              ? "button__account__active"
              : "button__account"
          }
          onClick={() => {
            props.activeButton === 3
              ? props.toggleActiveButton()
              : props.toggleActiveButton(3);
            toggleHelpNotifications(false);
          }}
          onMouseEnter={() => {
            toggleHelpNotifications(true);
          }}
          onMouseLeave={() => {
            toggleHelpNotifications(false);
          }}
        >
          <AccountCircleIcon />
        </div>
      </div>
      <div
        className="header__option__account__help"
        style={{
          opacity: helpAccountOpacity,
          visibility: helpAccountVisibility,
        }}
      >
        <span onClick={props.logout}>Account</span>
      </div>
      <div
        className={"button__account__menu__wrapper"}
        style={
          props.activeButton === 3
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        <div className="button__account__menu__header">
          <h1 onClick={props.logout}>Account</h1>
        </div>
        <div className="button__account__menu__body"></div>
      </div>
    </>
  );
};

export default ButtonAccount;
