import React from "react";
import style from './dialogues.module.css';
import Personalities from "./Personalities/Personalities";
import Messages from "./Messages/Messages";

const Dialogues = (props) => {
  let personalitiesElements = props.state.personalitiesData.map( (person) => <Personalities key={person.id} name={person.name} id={person.id} /> );
  let messagesElements = props.state.messagesData.map( (message) => <Messages key={message.id} message={message.message} /> );

  let newMessageElemrnt = React.createRef();

  let addMessage = () => {
    let message = newMessageElemrnt.current.value;
    alert(message)
  }

  return (
    <div className={style.dialogues}>
      <div className={style.dialoguesContainer}>
        <div className={style.personalitiesList}>
          {personalitiesElements}
        </div>
        <div className={style.messagesList}>
          {messagesElements}
          <textarea></textarea>
          <button onClick={ addMessage } ></button>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
