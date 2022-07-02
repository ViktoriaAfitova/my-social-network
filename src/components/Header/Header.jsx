import React from "react";
import style from "./header.module.css";
import { student } from "../../assets";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.container}>
          <img src={student} alt="logo" />
        </div>

        <div className={style.login}>
          {props.isAuth ? (
            <div>
              {props.login} <button onClick={props.logout}>Log Out</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
