import React from "react";
import styles from "./FlightsResult.module.css";

export default function FlightsResult() {
  return (
    <div>
      <div className={styles.FlightsResultContainer}>
        <section className={styles.userSearch}>
          <div className={styles.userInputsTrom}>
            <h1>Tel aviv</h1>
          </div>
          <div className={styles.userInputsTo}>
            <h1>Tel aviv</h1>
          </div>
          <div className={styles.userInputsDate}>
            <h1>tel aviv</h1>
          </div>
          <div className={styles.userChangeFlight}>
            <h1>tel aviv</h1>
          </div>
        </section>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
