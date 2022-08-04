import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

let dialogs = [
    {id:1, name: "Artur"},
    {id:2, name: "Sofia"},
    {id:3, name: "Ilya"},
    {id:4, name: "Tanya"},
    {id:5, name: "Vera"},
    {id:6, name: "Ivan"}
];

let messages = [
    {id:1, message: "Привет! Погнали на шаву"},
    {id:2, message: "Купи вкуснях"},
    {id:3, message: "Я тебя люблю"},
    {id:4, message: "Новые фото Арины"},
    {id:5, message: "Пост с инсты"},
    {id:6, message: "С праздником!!"},
]

let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
let messagesElement = messages.map((m) => <Message message = {m.message}/>)

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