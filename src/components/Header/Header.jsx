import React from "react";
import style from "./header.module.css";
import { student } from "../../assets";
import { NavLink } from "react-router-dom";

const Header = ({id, email, login, isAuth}) => {
  // debugger;
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.container}>
          <img src={student} alt="logo" />
        </div>

        <div className={style.login}>
          {isAuth ? (
            <span
              // login={login}
              // isAuth={isAuth}
              // email={email}
              // id={id}
              // profile={profile}
            >{login}
            </span>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
