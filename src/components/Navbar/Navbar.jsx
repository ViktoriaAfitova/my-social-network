import React from 'react';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}><NavLink to="/profile" className={style.link} activeclassname={style.active}>Profile</NavLink></li>
        <li className={style.item}><NavLink to="/dialogues" className={style.link} activeclassname={style.active}>Message</NavLink></li>
        <li className={style.item}><NavLink to="/" className={style.link}>News</NavLink></li>
        <li className={style.item}><NavLink to="/" className={style.link}>Music</NavLink></li>
        <li className={style.item}><NavLink to="/" className={style.link}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;