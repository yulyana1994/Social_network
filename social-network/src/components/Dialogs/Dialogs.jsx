import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ state }) => {
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newElement = React.createRef();

  let addMessage = () => {
    let textMessage = newElement.current.value;
    alert(textMessage);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
      <textarea ref={newElement}></textarea>
      <div>
        <button onClick={addMessage}>Add new message</button>
      </div>
    </div>
  );
};

export default Dialogs;
