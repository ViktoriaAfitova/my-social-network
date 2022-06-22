import React from "react";
import "./App.css";
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="wrapper-content">
          <Routes>
          <Route path="/profile" element={<ProfileContainer/>} />
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialogues" element={<DialoguesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
