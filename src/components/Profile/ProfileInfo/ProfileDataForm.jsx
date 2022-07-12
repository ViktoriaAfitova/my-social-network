import React from "react";
import style from "./profileDataForm.module.css";
import { useFormik } from "formik";

const ProfileDataForm = ({ profile, saveProfile }) => {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      lookingForAJob: false,
      lookingForAJobDescription: '',
      aboutMe: '',

      contacts: {
        facebook: profile.contacts.facebook,
        website: profile.contacts.website,
        vk: profile.contacts.vk,
        twitter: profile.contacts.twitter,
        instagram: profile.contacts.instagram,
        youtube: profile.contacts.youtube,
        github: profile.contacts.github,
        mainLink: profile.contacts.mainLink,
      },
    },
    onSubmit: (values) => {
      console.log(values)
      // saveProfile(formik.values);
    },
  });

  console.log(formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} component="form">
        <div className={style.formControl}>
          <button
            className={style.btn}
            type="submit"

          >
            save
          </button>
        </div>

        <div className={style.formControl}>
          <label htmlFor="fullName" className={style.labelForm}>Full name:</label>
          <input
            className={style.inputForm}
            type="fullName"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </div>

        <div className={style.formControl}>
          <input
            type={"checkbox"}
            id="lookingForAJob"
            name="lookingForAJob"
            onChange={formik.handleChange}
            value={formik.values.lookingForAJob}
          />
          Looking for a job:
        </div>

        <div className={style.formControl}>
          <label htmlFor="skills" className={style.labelForm}>Skills:</label>
          <textarea
            className={style.textareaForm}
            type="skills"
            id="skills"
            name="skills"
            onChange={formik.handleChange}
            value={formik.values.skills}
          >
            {profile.lookingForAJobDescription}
          </textarea>
        </div>

        <div className={style.formControl}>
          <label htmlFor="aboutMe" className={style.labelForm}>About me</label>
          <textarea
            className={style.textareaForm}
            type="aboutMe"
            id="aboutMe"
            name="aboutMe"
            onChange={formik.handleChange}
            value={formik.values.aboutMe}
          >
            {profile.aboutMe}
          </textarea>
        </div>
        <div>
          Contacts:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div>
                <p>
                  {key}: <input />
                </p>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ProfileDataForm;
