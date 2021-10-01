import React from "react";
import styles from "./frieds.module.css";
import FriendListItem from "./friend,";

export const Friends = ({ friends }) => {
  return (
    <div className={styles.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </div>
  );
};
