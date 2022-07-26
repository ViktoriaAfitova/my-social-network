import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/auth-reducer.ts';

const HeaderContainer = (props) => {

  return <Header {...props} />

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  // id: state.auth.id,
  // profile: state.profilePage.profile
});

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);