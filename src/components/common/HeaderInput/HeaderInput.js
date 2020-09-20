import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderInput.css";

const HeaderInput = (props) => {
  return (
    <div className="header__input">
      <SearchIcon />
      <input type="text" placeholder="Search Social Network" />
    </div>
  );
};

export default HeaderInput;
