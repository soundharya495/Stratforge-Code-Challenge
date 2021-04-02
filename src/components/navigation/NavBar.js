import React from "react";
import {NavLink} from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="left">
        <div className="logo">SpaceX</div>
      </div>
      <div className="right">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/history'>History</NavLink>
        <NavLink to='/launches'>Launches</NavLink>
        <NavLink to='/rockets'>Rockets</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
