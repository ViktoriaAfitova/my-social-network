// import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogues);

export default DialoguesContainer;
