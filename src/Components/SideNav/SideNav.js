import React from "react";
import styles from "./SideNav.module.css";
import img from "./images/Dashboard.png";
import img1 from "./images/Group.png";
import img2 from "./images/Help.png";

export default function SideNav() {
  return (
    <>
      <div className={styles.mainnav}>
        <div className={styles.navbar}>
          <a href="#" className={styles.title}>
            <p>@JENILSUTARIYA</p>
          </a>
          <a href="#" className={styles.dashboard}>
            <p>
              <img src={img} alt="dash boeard icon"></img>Dash Board
            </p>
          </a>
          <a href="#" className={styles.transaction}>
            <p>
              <img src={img1} alt="transaction icon"></img>Transaction
            </p>
          </a>
          <a href="#" className={styles.support}>
            <p>
              <img src={img2} alt="support icon"></img>Support
            </p>
          </a>
        </div>
        <div className={styles.info}>
          <p>Dashboard</p>
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </>
  );
}
