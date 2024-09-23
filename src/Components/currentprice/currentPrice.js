import React from "react";
import ViewBoard from "../viewBoard/viewBoard"
import styles from "./currentPrice.module.css";
import img from "./img/Graph.png"
// import img1 from "./img/Vector 26.png"


export default function CurrentPrice() {
  return (
   <div className={styles.maincard}>
     <div className={styles.card}>
      <div className={styles.header}>
        <h1>Current Price</h1>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buy}`}>
            <i className="fas fa-plus" /> Buy
          </button>
          <button className={`${styles.button} ${styles.sell}`}>
            <i className="fas fa-minus" /> Sell
          </button>
        </div>
      </div>
      <div className={styles.btcprice}>
      <div className={styles.price}>₹26,670.25</div>
      <div className={styles.priceChange}>▲ 0.04%</div>
      </div>
      <div className={styles.timeframe}>
        <button>1H</button>
        <button className={`${styles.active}`}>1D</button>
        <button>1W</button>
        <button>1M</button>
      </div>
      <div className={styles.chart}>
        <img src={img} alt="Graph image"></img>
      </div>
      <div className={styles.timestamps}>
        <span>7:15 PM</span>
        <span>12:55 AM</span>
        <span>6:35 AM</span>
        <span>12:15 PM</span>
        <span>5:55 PM</span>
      </div>
    </div>
    <div className={styles.viewboard}>
    <ViewBoard />
    </div>
   </div>
  );
}
