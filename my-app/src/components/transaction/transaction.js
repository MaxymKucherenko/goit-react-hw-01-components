import React from "react";
import styles from "./transaction.module.css";

export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={styles.transaction}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
