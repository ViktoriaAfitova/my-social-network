import React from 'react';
import LoginForm from '../Forms/LoginForm';
import style from './login.module.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/auth-reducer';

const Login = ({loginThunk, isAuth, userId}) => {

  if (isAuth) {
    return <Navigate replace to={`/profile/${userId}`} />
  }

  return (
    <>
      <h1 className={style.titleForm}>Sign Up</h1>
      <LoginForm loginThunk={loginThunk} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,
  id: state.auth.id,
})

export default connect(mapStateToProps, {loginThunk}) (Login);