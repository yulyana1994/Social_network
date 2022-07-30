import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/Dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Artur"} id="1"/>
                <DialogItem name={"Sofia"} id="2"/>
                <DialogItem name={"Ilya"} id="3"/>
                <DialogItem name={"Vera"} id="4"/>
                <DialogItem name={"Yulyana"} id="5"/>
                <DialogItem name={"Ivan"} id="6"/>
                <DialogItem name={"Tanya"} id="7"/>
            </div>
            <div className={s.messages}>
                <Message message = "Привет! Погнали на шаву"/>
                <Message message = "Купи вкуснях"/>
                <Message message = "Я тебя люблю"/>
                <Message message = "Новый пост"/>
                <Message message = "Выигрышная комбинация 6 из 49"/>
                <Message message = "С праздником!!"/>
                <Message message = "Новый видосик с Ари"/>
            </div>
        </div> 
    )
}

export default Dialogs;