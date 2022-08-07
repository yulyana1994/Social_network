import React from "react";
import s from "./../Friends.module.css";



const FriendsItem = (props) =>{
    return(
            <div className={s.friendsItem}>
                {props.avatar} {props.name}
            </div>
    )
};

export default FriendsItem;