import React from "react";
import styles from "./frieds.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
