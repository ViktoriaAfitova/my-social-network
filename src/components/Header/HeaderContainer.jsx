import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authThunk } from '../../redux/auth-reducer';
import { logoutThunk } from '../../redux/auth-reducer';

const HeaderContainer = (props) => {

  return <Header {...props} />

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  // id: state.auth.id,
  // profile: state.profilePage.profile
});

export default connect(mapStateToProps, {authThunk, logoutThunk})(HeaderContainer);