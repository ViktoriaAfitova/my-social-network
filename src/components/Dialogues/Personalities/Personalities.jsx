import React from 'react';
import style from './../dialogues.module.css';
import { NavLink } from 'react-router-dom';
import { avatar1 } from '../../../assets';

const Personalities = (props) => {
  let path = "/dialogues/" + props.id;

  return <div className={style.personalityItem + '' + style.active}>
    <img src={avatar1} alt="avatar"/>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default Personalities;