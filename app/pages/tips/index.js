import React from "react";
import styles from "../../styles/Home.module.css";

export default function Tips() {
  return (
    <div>
      <h1 className={styles.title}>Tip Your Streamer</h1>
      <a href="https://cash.app/$theshamingofjay" className={styles.card}>
        {" "}
        CashApp{" "}
      </a>
      <a href="https://venmo.com/theshamingofjay" className={styles.card}>
        {" "}
        Venmo{" "}
      </a>
      <a href="https://paypal.me/theshamingofjay" className={styles.card}>
        {" "}
        PayPal{" "}
      </a>
      <a
        href="https://www.buymeacoffee.com/theshamingofjay"
        className={styles.card}
      >
        {" "}
        Buy Me A Coffee{" "}
      </a>
    </div>
  );
}
