import React, { useState } from "react";
// import { computer } from "../../../assets";
import style from "./profileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import Spinner from "../../Spinner/Spinner";
import { transparentAvatar } from "../../../assets";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, isOwner, savePhoto, status, updateStatus }) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Spinner />
  }

  const selectPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={style.description}>
        <div className={style.avatarContainer}>
          <img className={style.avatar} src={profile.photos.large || transparentAvatar} alt="" />
        </div>
        <div>
          { isOwner && <input className={style.input} type={'file'} onChange={selectPhoto} />}
        </div>
        { editMode
          ? <ProfileDataForm profile={profile} />
          : <ProfileData goToEditMode={ () => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    <div>
      {isOwner && <div><button className={style.btn} onClick={goToEditMode}>edite</button></div> }
    </div>

    <p>Full name:<span>{profile.fullName}</span></p>
    <p>Looking for a job: <span>{profile.lookingForAJob ? 'yes' : 'no'}</span></p>
      { profile.lookingForAJob &&
        <p>Skills:<span>{profile.lookingForAJobDescription}</span></p>
      }
    <p>About me:<span>{profile.aboutMe}</span></p>
    <div>Contacts: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>{contactTitle} : {contactValue}</div>
}

export default ProfileInfo;
