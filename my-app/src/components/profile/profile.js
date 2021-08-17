import React from "react";
import Card from "@material-ui/core/Card";
import styles from "./profile.module.css";

export const Profile = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map(({ id, name, avatar, tag, location, stats }) => (
        <Card key={id}>
          <div className={styles.profile}>
            <div className={styles.description}>
              <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
              />
              <h3 className="name">{name}</h3>
              <p className={styles.tag}>@{tag}</p>
              <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
              <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{stats.followers}</span>
              </li>
              <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{stats.views}</span>
              </li>
              <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{stats.likes}</span>
              </li>
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};
