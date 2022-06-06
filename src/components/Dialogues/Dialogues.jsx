import React from "react";
import style from "./dialogues.module.css";
import Personalities from "./Personalities/Personalities";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
  let state = props.dialoguesPage;

  let personalitiesElements = state.personalitiesData.map((person) => (<Personalities key={person.id} name={person.name} id={person.id} />));
  let messagesElements = state.messagesData.map((message) => (<Messages key={message.id} message={message.message} />));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
