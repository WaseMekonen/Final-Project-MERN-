import React from "react";
import styles from "./FlightsResult.module.css";

export default function FlightsResult() {
  return (
    <div>
      <div className={styles.FlightsResultContainer}>
        <section className={styles.userSearch}>
          <div ></div>
        </section>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
