import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/Profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
      <div className={s.friendsNav}>
        <Friends state={props.state.sideBar} />
      </div>
    </nav>
  );
};

export default Navbar;
