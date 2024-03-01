import React from "react";
import Logo from "../assets/svgs/logo.svg";

const Header = () => {
  return (
    <div className="py-3 shadow">
      <div className="">
        <img src={Logo} alt="checked-icon" className="" />
      </div>
    </div>
  );
};

export default Header;
