import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ( { state } ) => {

let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
let messagesElement = state.messages.map((m) => <Message message = {m.message}/>);


    return (
        <div className={s.dialogs}>  
            <div className={s.dialogsItems}>
                { dialogsElements } 
            </div>
             <div className={s.messages}>
                { messagesElement }
            </div> 
        </div> 
    )
}

export default Dialogs;