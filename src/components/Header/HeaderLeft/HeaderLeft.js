import React from "react";
import HeaderInput from "../../common/HeaderInput/HeaderInput";
import HeaderLogo from "../../common/HeaderLogo/HeaderLogo";
import "./HeaderLeft.css";

const HeaderLeft = (props) => {
  return (
    <div className="header__left">
      <HeaderLogo />
      <HeaderInput />
    </div>
  );
};

export default HeaderLeft;
