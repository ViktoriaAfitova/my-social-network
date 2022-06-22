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
        {props.isAuth ? props.login
          // <div className={style.login}>
          //   login={props.login}
          //   id={props.id}
          //   isAuth={props.isAuth}
          //   profile={props.profile}
          // </div>
        : <NavLink to={"/login"}>Login</NavLink>
        }
        </div>

    </header>
  );
};

export default Header;
