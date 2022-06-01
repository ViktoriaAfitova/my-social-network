import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route path="/dialogues" element={<Dialogues personalityData={props.personalityData} messagesData={props.messagesData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
