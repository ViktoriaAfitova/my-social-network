// import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, profileThunkCreator, getStatus, updateStatus } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, profileThunkCreator, id, posts, status }) => {
  const { userId } = useParams();

  if (!userId) {
    userId = 24484;
  }

  useEffect(() => {
    profileThunkCreator(userId);
  }, [userId, profileThunkCreator]);

  useEffect(() => {
    getStatus(userId);
  })

  return (
    <Profile
      id={id}
      profile={profile}
      posts={posts}
      status={status}
      updateStatus={updateStatus}
    />
  )
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  posts: state.profilePage.posts,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { setUserProfile, profileThunkCreator, getStatus, updateStatus }),
  // withAuthRedirect
) (ProfileContainer);


