import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";

const DialoguesContainer = (props) => {
  let state = props.store.getState().dialoguesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogues
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialoguesPage={state}
    />
  );
};

export default DialoguesContainer;
