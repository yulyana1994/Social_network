import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id:1, message: "Это мой первый пост!", likesCount:25},
        {id:2, message: "Меня зовут София", likesCount: 15},
        {id:3, message: "Привет", likesCount: 5},
        {id:4, message: "Я стараюсь выучить React", likesCount: 54},
        {id:5, message: "Я стараюсь выучить JS", likesCount: 4},
        {id:6, message: "Приветик", likesCount: 5}
    ]

    let postElement = posts.map((p) => <Post message = {p.message} likesCount = {p.likesCount}/>);

    return(
            <div className={s.postBlock}>
                <h3>My post</h3>
                    <div>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Add new Post </button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        { postElement }
                    </div>
            </div>
    )
}

export default MyPosts;