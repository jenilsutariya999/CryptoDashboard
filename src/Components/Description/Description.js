import React from 'react';
import styles from './Description.module.css'; 

export default function Description() {
  return (
    <div className={styles.maindesc}>
      <div className={styles.description}>
      <button className={styles.loansBtn}>Loans</button>
      <p className={styles.descriptionText}>
        Learn more about Loans – Keep your Bitcoin, <br/>access its value without selling it.
      </p>
    </div>
    <div className={styles.desc}>
      <button className={styles.conractBtn}>contact</button>
      <p className={styles.desText}>
      Learn more about our real estate, mortgage, and <br/>  corporate account services
      </p>
    </div>
    </div>
  );
}
