import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

const NavbarContainer = ({profile, id}) => {
  return <Navbar profile={profile} id={id} />
}

let mapStateToProps = (state) => (
  {
      profile: state.profilePage.profile,
      id: state.auth.id,
  }
)

export default connect(mapStateToProps)(NavbarContainer);