import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookingProcess.module.css";

function BookingProcess() {
  return (
    <>
      <ul className={styles.processList}>
        <li>
          <Link>1</Link>
          <span>Traveler & Flight Details</span>
        </li>
        <div className={styles.line}></div>
        <li>
          <Link>2</Link>
          <span>Payment</span>
        </li>
        <div className={styles.line}></div>
        <li>
          <Link>3</Link>
          <span>View Book</span>
        </li>
      </ul>
    </>
  );
}

export default BookingProcess;
