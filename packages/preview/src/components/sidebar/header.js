import React from "react";
import logo from "../../assets/react-icons.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <header>
        <img src={logo} alt="react-icons" />
        <span>react-icons</span>
      </header>
    </Link>
  );
}

export default Header;
