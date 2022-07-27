import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, getUsersThunkCreator } from '../../redux/usersReduser';
import Users from "./Users";
import style from "./users.module.css";
import Spinner from "../Spinner/Spinner";
import { UsersType } from "../../types/types";
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isLoading: boolean
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = ({ pageTitle, users, pageSize, totalUsersCount, currentPage, isLoading, getUsersThunkCreator, follow, unfollow, followingInProgress }) => {

  useEffect(() => {
    getUsersThunkCreator(currentPage, pageSize);
  }, [pageSize, currentPage, getUsersThunkCreator])

  const onPageChanged = (page: number) => {
    getUsersThunkCreator(page, pageSize);
  }

  return (
    <main className={style.main}>
      <h2>{pageTitle}</h2>
      <div className={style.mainUsersContainer}>
        {isLoading ?
          <Spinner />
         : <Users
              currentPage={currentPage}
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              onPageChanged={onPageChanged}
              // id={userId}
              users={users}
              follow={follow}
              unfollow={unfollow}
              followingInProgress={followingInProgress}
              disabled={false}
            />
        }
      </div>
    </main>
  );
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default compose<React.Component>((connect(mapStateToProps, {follow, unfollow, getUsersThunkCreator}))) (UsersContainer);




