import React from "react";
import style from './dialogues.module.css';
import Personalities from "./Personalities/Personalities";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
  let personalityElements = props.personalityData.map( (person) => <Personalities key={person.id} name={person.name} id={person.id} /> );
  let messagesElements = props.messagesData.map( (message) => <Messages key={message.id} message={message.message} /> );

  return (
    <div className={style.dialogues}>
      <div className={style.dialoguesContainer}>
        <div className={style.personalityList}>
          {personalityElements}
        </div>
        <div className={style.messagesList}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
