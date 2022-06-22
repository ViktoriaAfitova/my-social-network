// import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, profileThunkCreator } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = ({ profile, profileThunkCreator, id, posts, isAuth }) => {
  const { userId } = useParams();

  useEffect(() => {
    profileThunkCreator(userId);
  }, [userId, profileThunkCreator]);

  return <Profile profile={profile} id={id} posts ={posts} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, profileThunkCreator }),
  withAuthRedirect
) (ProfileContainer);

