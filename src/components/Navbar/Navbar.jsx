import React from 'react';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}><NavLink to="/profile" className={style.link} activeclassname={style.active}>Profile</NavLink></li>
        <li className={style.item}><NavLink to="/dialogues" className={style.link} activeclassname={style.active}>Message</NavLink></li>
        <li className={style.item}><a className={style.link} href="#s">News</a></li>
        <li className={style.item}><a className={style.link} href="#s">Music</a></li>
        <li className={style.item}><a className={style.link} href="#s">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;