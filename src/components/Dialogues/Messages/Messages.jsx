import React from 'react';
import style from './../dialogues.module.css';

const Messages = (props) => {
  return <div className={style.messagesItem}>{props.message}</div>
}

export default Messages;