import React from "react";
import styles from './priceBoard.module.css';
import img1 from './img/Up.png'
import img2 from './img/Down.png'
import img3 from './img/Label.png'
import img4 from './img/Label1.png'

export default function PriceBoard() {
  return (
    <div>
      <div className={styles.priceboard}>
        <div className={styles.value}>
          <h3>Total Portfolio Value</h3>
          <p>₹ 112,312.24</p>
        </div>
        <div className={styles.balances}>
          <h3>Wallet Balances</h3>
          <p>22.39401000<img src={img3} alt="price icon"></img></p>
        </div>
        <div className={styles.balances}>
          <p>₹ 1,300.00<img src={img4} alt="balance icon"></img></p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}><img src={img1} alt="deposit btn icon"></img>Deposit</button>
          <button className={styles.button}><img src={img2} alt="withdraw btn icon"></img>Withdraw</button>
        </div>
      </div>
    </div>
  );
}
