import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="left">
        <div className="logo">SpaceX</div>
      </div>
      <div className="right">
        <span>Home</span>
        <span>History</span>
        <span>Launches</span>
        <span>Rockets</span>
      </div>
    </div>
  );
};

export default NavBar;
