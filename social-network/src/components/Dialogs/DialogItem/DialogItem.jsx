import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../Avatar/Avatar";


const DialogItem = (props) =>{
    return(
        <div className={s.dialog + " " + s.active}>
            <Avatar avatar= {props.avatar}/>
            <NavLink to={"/Dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem;