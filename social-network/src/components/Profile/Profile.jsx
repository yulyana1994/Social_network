import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
