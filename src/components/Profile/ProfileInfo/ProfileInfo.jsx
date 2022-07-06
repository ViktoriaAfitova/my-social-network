import React from "react";
// import { computer } from "../../../assets";
import style from "./profileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import Spinner from "../../Spinner/Spinner";
import { transparentAvatar } from "../../../assets";

const ProfileInfo = ({ profile, userId, posts, status, updateStatus, newStatus }) => {

  if (!profile) {
    return <Spinner />
  }

  return (
    <div>
      {/* <div className={style.imgContainer}>
        <img className={style.bg} src={computer} alt="img" />
      </div> */}
      <div className={style.description}>
        <div className={style.avatarContainer}>
          <img className={style.avatar} src={profile.photos.large != null ? profile.photos.large : transparentAvatar} alt="" />
        </div>
        <ProfileStatus
          // profile={profile}
          // userId={userId}
          status={status}
          updateStatus={updateStatus}
          // newStatus={newStatus}
        />
        {/* <p>{profile.aboutMe}</p>
        <p>{profile.contacts.facebook}</p>
        <p>{profile.contacts.website}</p>
        <p>{profile.contacts.vk}</p>
        <p>{profile.contacts.twitter}</p>
        <p>{profile.contacts.instagram}</p>
        <p>{profile.contacts.youtube}</p>
        <p>{profile.contacts.github}</p> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
