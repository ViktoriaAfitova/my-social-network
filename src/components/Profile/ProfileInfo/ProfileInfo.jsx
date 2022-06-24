import React from "react";
// import { computer } from "../../../assets";
import style from "./profileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, userId, posts, status }) => {

  return (
    <div>
      {/* <div className={style.imgContainer}>
        <img className={style.bg} src={computer} alt="img" />
      </div> */}
      <div className={style.description}>
        <img src={profile.photos.large} alt="" />
        <ProfileStatus status={'hello'} />
        <p>{profile.aboutMe}</p>
        <p>{profile.contacts.facebook}</p>
        <p>{profile.contacts.website}</p>
        <p>{profile.contacts.vk}</p>
        <p>{profile.contacts.twitter}</p>
        <p>{profile.contacts.instagram}</p>
        <p>{profile.contacts.youtube}</p>
        <p>{profile.contacts.github}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
