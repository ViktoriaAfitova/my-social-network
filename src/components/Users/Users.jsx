import React from "react";
import style from "./users.module.css";
import Pagination from "@mui/material/Pagination";
import User from "./User";

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
      {users.map(user =>
        <User
          user={user}
          followingInProgress={followingInProgress}
          key={user.id}
          unfollow={unfollow}
          follow={follow}
        />
      )}
    </>
  );
};

export default Users;
