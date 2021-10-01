import React from "react";
import styles from "./statistics.module.css";

export const Statistics = ({ statistical }) => {
  return (
    <div className={styles.statistics}>
      <section>
        <h2 className={styles.title}>Upload stats</h2>
        <ul className={styles.list}>
          {statistical.map(({ id, label, percentage }) => (
            <li className={styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage} %</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
