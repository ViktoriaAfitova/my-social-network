import React from "react";
import style from "./users.module.css";
import Pagination from "@mui/material/Pagination";
import User from './User';
import { UsersType } from '../../types/types';

type PropsType = {
  users: Array<UsersType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (num: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: Array<number>
  disabled: boolean
}

const Users: React.FC<PropsType> = ({
  users,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  follow,
  unfollow,
  followingInProgress,
  disabled
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  return (
    <>
      <div className={style.usersContainer}>
        <Pagination
          count={pagesCount}
          size="small"
          page={currentPage}
          onChange={(_, num: number) => onPageChanged(num)}
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
