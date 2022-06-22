import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, getUsersThunkCreator, toggleFollowingProgress } from '../../redux/usersReduser';
import Users from "./Users";
import style from "./users.module.css";
import Spinner from "../Spinner/Spinner";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const UsersContainer = ({ users, userId, pageSize, totalUsersCount, currentPage, isLoading, getUsersThunkCreator, follow, unfollow, followingInProgress, toggleFollowingInProgress }) => {

  useEffect(() => {
    getUsersThunkCreator(currentPage, pageSize);
  }, [pageSize, currentPage, getUsersThunkCreator])

  const onPageChanged = (page) => {
    getUsersThunkCreator(page, pageSize);
  }

  return (
    <main className={style.main}>
      <div className={style.mainUsersContainer}>
        {isLoading ?
          <Spinner />
         : <Users
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            id={userId}
            users={users}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
            // toggleFollowingInProgress={toggleFollowingInProgress}
          />
        }
      </div>
    </main>
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default compose(
  (connect(mapStateToProps, {follow, unfollow, getUsersThunkCreator, toggleFollowingProgress})),
  withAuthRedirect
) (UsersContainer);




