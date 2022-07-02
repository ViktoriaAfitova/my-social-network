import React, { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import axios from 'axios';

const HeaderContainer = (props) => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        setAuthUserData(id, email, login);
      }
    })
  })
debugger;
  return <Header id={props.id} login={props.login} />

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  // id: state.auth.id,
  // profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);