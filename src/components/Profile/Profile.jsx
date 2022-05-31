import React from "react";
import { student } from "../../assets";
import MyPosts from "./MyPosts/MyPosts";
// import style from "./profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src={student} alt="img" />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
