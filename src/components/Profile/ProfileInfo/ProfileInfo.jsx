import React from 'react';
import {computer } from '../../../assets';
import style from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.imgContainer}>
        <img className={style.bg} src={computer} alt="img" />
      </div>
      <div className={style.description}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;