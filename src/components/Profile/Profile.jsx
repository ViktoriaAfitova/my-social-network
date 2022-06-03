import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import style from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updatePostText={props.updatePostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;