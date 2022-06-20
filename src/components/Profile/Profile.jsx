import React from "react";
// import style from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Spinner from '../Spinner/Spinner';

const Profile = ({profile, id, posts}) => {
  if (!profile) {
    return <Spinner/>
  }
  return (
    <div>
      <ProfileInfo
        profile={profile}
        id={id}
        posts={posts}
      />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
