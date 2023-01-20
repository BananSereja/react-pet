import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <button className="btn_home">Home</button>
      <div className="search_container">
        <input placeholder="Entry title" className="input_search" type="text" />
        <div className="searc_logo"></div>
      </div>
      <button className="btn_login"></button>
    </header>
  );
}

export default Header;
