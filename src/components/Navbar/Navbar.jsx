import React from 'react';
import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({profile, id}) => {

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}><NavLink to={`/profile/${id}`} className={style.link} activeclassname={style.active}>Profile</NavLink></li>
        <li className={style.item}><NavLink to="/dialogues" className={style.link} activeclassname={style.active}>Message</NavLink></li>
        <li className={style.item}><NavLink to="/users" className={style.link} activeclassname={style.active}>Users</NavLink></li>
        <li className={style.item}><NavLink to="/news" className={style.link}>News</NavLink></li>
        <li className={style.item}><NavLink to="/music" className={style.link}>Music</NavLink></li>
        <li className={style.item}><NavLink to="/settings" className={style.link}>Settings</NavLink></li>
        {/* <li className={style.item}>Friends</li> */}
      </ul>
    </nav>
  )
}

export default Navbar;