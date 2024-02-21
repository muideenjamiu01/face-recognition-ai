import React from "react";
import Logo from "../assets/svgs/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="p-10">
        <img src={Logo} alt="checked-icon" className="" />
      </div>
    </div>
  );
};

export default Header;
