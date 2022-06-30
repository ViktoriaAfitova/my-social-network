import React from "react";
// import style from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Spinner from '../Spinner/Spinner';

const Profile = ({profile, userId, posts, status, updateStatus}) => {
  // if (!profile) {
  //   return <Spinner/>
  // }
  return (
    <div>
      <ProfileInfo
        profile={profile}
        // id={id}
        posts={posts}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
