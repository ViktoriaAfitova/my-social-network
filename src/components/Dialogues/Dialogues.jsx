import React from "react";
import style from "./dialogues.module.css";
import Personalities from "./Personalities/Personalities";
import Messages from "./Messages/Messages";
import { useFormik } from 'formik';

const Dialogues = ({dialoguesPage, addNewMessageDialogues}) => {

  let state = dialoguesPage;

  let personalitiesElements = state.personalitiesData.map((person) => (<Personalities key={person.id} name={person.name} id={person.id} />));
  let messagesElements = state.messagesData.map((message) => (<Messages key={message.id} message={message.message} />));

  return (
    <div className={style.dialogues}>
      <div className={style.dialoguesContainer}>
        <div className={style.personalitiesList}>{personalitiesElements}</div>
        <div className={style.messagesList}>
          <div>{messagesElements}</div>
          <AddMessageForm addMessageDialogues={addNewMessageDialogues} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <textarea type='text' id='message' name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onSubmit={formik.handleSubmit}
          />
          <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Dialogues;
