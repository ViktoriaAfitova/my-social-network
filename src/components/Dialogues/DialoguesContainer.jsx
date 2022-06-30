// import React from "react";
import { sendMessageCreator } from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { compose } from "redux";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageDialogues : (message) => {dispatch(sendMessageCreator(message))},
}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
) (Dialogues);


