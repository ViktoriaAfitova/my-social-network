import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, profileThunkCreator, getStatus, updateStatus } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, profileThunkCreator, id, posts, status, authorizedUserId }) => {
  const { userId } = useParams();
  console.log(userId)

  // if (!userId) {
  //   debugger;
  //   userId = authorizedUserId;
  // }

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
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  id: state.auth.id
});

export default compose(
  connect(mapStateToProps, { setUserProfile, profileThunkCreator, getStatus, updateStatus }),
  withAuthRedirect
) (ProfileContainer);


