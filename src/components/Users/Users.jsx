import React from "react";
import style from "./users.module.css";
import { transparentAvatar } from "../../assets";
import { NavLink } from "react-router-dom";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i);
    }

  return (
    <div className={style.usersContainer}>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(e) => {
                props.onPageChanched(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={style.avatar}
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : transparentAvatar
                  }
                  alt="avatar"
                />
              </NavLink>
            </div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
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
              <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
