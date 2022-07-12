import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, profileThunkCreator, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, profileThunkCreator, id, posts, status, savePhoto }) => {

  const { userId } = useParams();

  useEffect(() => {
    profileThunkCreator(userId);
  }, [userId, profileThunkCreator]);

  useEffect(() => {
    getStatus(userId);
  })

  return (
    <Profile
      id={id}
      isOwner={userId}
      profile={profile}
      posts={posts}
      status={status}
      updateStatus={updateStatus}
      savePhoto={savePhoto}
    />
  )
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  // posts: state.profilePage.posts,
  authorizedUserId: state.auth.userId,
  // id: state.auth.id
});

export default compose(
  connect(mapStateToProps, { setUserProfile, profileThunkCreator, getStatus, updateStatus, savePhoto, saveProfile }),
  withAuthRedirect
) (ProfileContainer);


