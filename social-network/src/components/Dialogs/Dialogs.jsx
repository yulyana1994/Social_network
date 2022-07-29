import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>Артур</div>
                <div className={s.dialog}>София</div>
                <div className={s.dialog}>Илья</div>
                <div className={s.dialog}>Юлианна</div>
                <div className={s.dialog}>Вера</div>
                <div className={s.dialog}>Иван</div> 
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет! Погнали на шаву</div>
                <div className={s.message}>Купи молока....</div>
                <div className={s.message}>Я тебя люблю!</div>
            </div>
        </div> 
    )
}

export default Dialogs;