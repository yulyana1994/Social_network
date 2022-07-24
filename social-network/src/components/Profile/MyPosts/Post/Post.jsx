import React from "react";
import s from "./Post.module.css";
import { profilePhoto } from "./image";

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src= { profilePhoto} alt="profilephoto" />
                { props.message }
            <div> like { props.likesCount}</div>
        </div>
    )
}

export default Post;