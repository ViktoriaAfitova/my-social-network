import React from 'react';
import style from './header.module.css';
import { computer } from '../../assets';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src={computer} alt="logo"/>
      </div>
    </header>
  )
}

export default Header;