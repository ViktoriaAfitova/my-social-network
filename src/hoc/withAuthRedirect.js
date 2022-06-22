import React from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
    return (!props.isAuth ? <Navigate to='/login' /> : <Component {...props}/>)
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;

}