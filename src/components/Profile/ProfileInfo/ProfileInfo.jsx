import React from 'react';
import { student } from '../../../assets';
import style from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={student} alt="img" />
      </div>
      <div className={style.description}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo;