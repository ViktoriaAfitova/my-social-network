import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = ({isAuth, userId}) => {
  if(isAuth) {
    return <Navigate replace to={`/profile/posts/${userId}`} />
  }

  return (
    <div>Login</div>
  )
}

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,
  id: state.auth.id,
})

export default connect(mapStateToProps) (Login);