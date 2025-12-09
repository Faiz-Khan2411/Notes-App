import React from "react";
import "./header.css";
import burgerMenu from "../../assets/list.svg";
import crossButton from "../../assets/x.svg"

function Header({ open, setOpen }) {
  return (
    <div className="right-bar-header">
      <h1 id="logo">Keeper</h1>
      <input
        name="search"
        type="search"
        placeholder="Search"
        aria="search bar"
      />
      <button id="burger-menu" onClick={()=> setOpen(!open)}>
        <img className={`burger-icon ${open ? "open" : ""}`} src={open ? crossButton : burgerMenu} alt="menu button" />
      </button>
    </div>
  );
}

export default Header;
