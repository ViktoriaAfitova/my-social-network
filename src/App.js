import React, { useEffect } from "react";
import "./App.css";
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Routes, Route } from "react-router-dom";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Spinner from "./components/Spinner/Spinner";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

export const App = ({initializeApp, initialized}) => {

  useEffect(() => {
    initializeApp();
  })

  if (!initialized) {
    return <Spinner />
  }

  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="wrapper-content">
        <Routes>
          <Route path="profile">
            <Route path=":userId" element={<ProfileContainer/>} />
          </Route>
          <Route path="/dialogues" element={<DialoguesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


const AppContainer = compose(connect(mapStateToProps, {initializeApp})) (App);

const AppMainContainer = (props) => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default AppMainContainer;