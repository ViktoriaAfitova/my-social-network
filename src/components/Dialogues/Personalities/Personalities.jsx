import React from 'react';
import style from './../dialogues.module.css';
import { NavLink } from 'react-router-dom';

const Personalities = (props) => {
  let path = "/dialogues/" + props.id;

  return <div className={style.personalityItem + '' + style.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default Personalities;