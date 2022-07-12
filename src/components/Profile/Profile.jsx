import React from "react";
// import style from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, id, isOwner, savePhoto, posts, status, updateStatus, saveProfile, initialValues}) => {

  return (
    <div>
      <ProfileInfo
        id={id}
        profile={profile}
        isOwner={isOwner}
        savePhoto={savePhoto}
        posts={posts}
        status={status}
        updateStatus={updateStatus}
        saveProfile={saveProfile}
      />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
