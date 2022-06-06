import React from "react";
import style from "./dialogues.module.css";
import Personalities from "./Personalities/Personalities";
import Messages from "./Messages/Messages";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogues = (props) => {

  let state = props.store.getState().dialoguesPage;

  let personalitiesElements = state.personalitiesData.map((person) => (<Personalities key={person.id} name={person.name} id={person.id} />));
  let messagesElements = state.messagesData.map((message) => (<Messages key={message.id} message={message.message} />));
  let newMessageBody = state.newMessageBody;

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let changeMessage = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogues}>
      <div className={style.dialoguesContainer}>
        <div className={style.personalitiesList}>{personalitiesElements}</div>
        <div className={style.messagesList}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={changeMessage}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button onClick={addMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
