import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogues" element={<DialoguesContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
