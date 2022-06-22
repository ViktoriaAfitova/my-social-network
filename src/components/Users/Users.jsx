import React from "react";
import style from "./users.module.css";
import { transparentAvatar } from "../../assets";
import { NavLink } from "react-router-dom";
import Pagination from "@mui/material/Pagination";


const Users = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  follow,
  unfollow,
  followingInProgress,
  disabled,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  return (
    <>
      <div className={style.usersContainer}>
        <Pagination
          count={pagesCount}
          size="small"
          page={currentPage}
          onChange={(_, num) => onPageChanged(num)}
        />
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id} id={user.id}>
            <div>
              <div>
                <NavLink to={`/profile/${user.id}`}>
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
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(true, user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id);
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
    </>
  );
};

export default Users;