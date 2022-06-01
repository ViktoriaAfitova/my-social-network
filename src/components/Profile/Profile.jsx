import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import style from "./profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
