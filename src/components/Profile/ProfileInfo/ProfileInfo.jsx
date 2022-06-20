import React from "react";
import { computer } from "../../../assets";
import style from "./profileInfo.module.css";

const ProfileInfo = ({ profile, id, posts }) => {
  // const profileInfo = [
  //   {
  //     id: 1,
  //     title: "Posts",
  //     count: posts.length,
  //   },
  //   {
  //     id: 2,
  //     title: "Followers",
  //     count: 1290,
  //   },
  //   {
  //     id: 3,
  //     title: "Following",
  //     count: 40,
  //   },
  // ];

  return (
    <div>
      <div className={style.imgContainer}>
        <img className={style.bg} src={computer} alt="img" />
      </div>
      <div className={style.description}>
        <img src={profile.photos.large} alt="" />
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
