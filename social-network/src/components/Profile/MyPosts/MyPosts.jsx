import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = ({ posts }) => {

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