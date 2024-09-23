import React from 'react'
import styles from "./viewBoard.module.css";

export default function ViewBoard() {
  return (
    <div className={styles.transactionContainer}>
    <div className={styles.transactionHeader}>Recent Transactions</div>

    <div className={styles.transactionItem}>
      <div className={styles.transactionIcon}>
        <i className="fas fa-dollar-sign"></i>
      </div>
      <div className={styles.transactionDetails}>
        <div className={styles.transactionTitle}>INR Deposit</div>
        <div className={styles.transactionDate}>2022-06-09 7:06 PM</div>
      </div>
      <div className={`${styles.transactionAmount} ${styles.positive}`}>
        + ₹81,123.10
      </div>
    </div>

    <div className={styles.transactionItem}>
      <div className={styles.transactionIcon}>
        <i className="fab fa-bitcoin"></i>
      </div>
      <div className={styles.transactionDetails}>
        <div className={styles.transactionTitle}>BTC Sell</div>
        <div className={styles.transactionDate}>2022-05-27 12:32 PM</div>
        <div className={`${styles.transactionAmount} ${styles.positive}`}>
          + ₹81,123.10
        </div>
      </div>
      <div className={`${styles.transactionAmount} ${styles.negative}`}>
        - 12.48513391 BTC
      </div>
    </div>

    <div className={styles.transactionItem}>
      <div className={styles.transactionIcon}>
        <i className="fas fa-dollar-sign"></i>
      </div>
      <div className={styles.transactionDetails}>
        <div className={styles.transactionTitle}>INR Deposit</div>
        <div className={styles.transactionDate}>2022-06-09 7:06 PM</div>
      </div>
      <div className={`${styles.transactionAmount} ${styles.positive}`}>
        + ₹81,123.10
      </div>
    </div>

    <button className={styles.viewAllButton}>View All</button>
  </div>
  )
}
