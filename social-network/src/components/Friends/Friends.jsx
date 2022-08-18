import React from "react";
import s from "./Friends.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = ({ state }) => {
  let friendsElements = state.friends.map((f) => (
    <FriendsItem name={f.name} avatar={f.avatar} />
  ));

  return (
    <div>
      <div className={s.friendsTitle}>Friends</div>
      <div className={s.friendsElements}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
