import React from 'react';
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotaUsersCountAC,
  setToggleIsLoadingAC,
} from "../../redux/usersReduser";
import Users from "./Users";
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanched = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsLoading(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
      { this.props.isLoading ? <Spinner /> : null }
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanched={this.onPageChanched}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotaUsersCountAC(totalCount));
    },
    toogleIsLoading: (isLoading) => {
      dispatch(setToggleIsLoadingAC(isLoading));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
