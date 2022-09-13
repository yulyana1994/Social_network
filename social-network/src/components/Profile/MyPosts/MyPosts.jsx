import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, newPostText, dispatch }) => {
  let postElement = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newElement = React.createRef();

  let addPosts = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newElement}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={addPosts}>Add new Post </button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
