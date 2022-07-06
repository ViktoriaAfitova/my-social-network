import React from 'react';
import { NavLink } from 'react-router-dom';
import { transparentAvatar } from '../../assets';
import style from './users.module.css';

const User = ({user, followingInProgress, unfollow, follow}) => {

  return (
    <div>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <div className={style.avatarContainer}>
            <img className={style.avatar} src={user.photos.small != null ? user.photos.small : transparentAvatar} alt="avatar" />
          </div>
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            className={style.btn}
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }}>
            Unfollow
          </button>
        ) : (
          <button
            className={style.btn}
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { follow(user.id)}}>
            Follow
          </button>
        )}
      </div>
      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{user.contacts}</div>
          <div>{"user.location.country"}</div>
        </div>
      </div>
    </div>
  )
}

export default User;