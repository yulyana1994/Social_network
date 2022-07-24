import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return(
            <div>
                My post
                    <div className={s.posts}>
                        <Post message = 'Это мой первый пост!' likesCount = "25"/>
                        <Post message = 'Привет! Меня зовут София' likesCount = "35"/>
                        <Post message = 'Как дела?'likesCount = "21"/>
                    </div>
            </div>
    )
}

export default MyPosts;