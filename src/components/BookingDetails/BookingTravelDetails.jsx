import React from "react";
import styles from "./BookingTravelDetails.module.css";
function BookingTravelDetails() {
  return (
    <>
      <form className={styles.form}>
        <section className={styles.emailInput}>
          <input type="email" />
        </section>
        <section className={styles.travelDetailInputs}>
          <input className={styles.nameInput} type="text" />
          <input className={styles.lastNameInput} type="text" />
          <input className={styles.birthDayInput} type="text" />
          <select className={styles.selectOption}>
            <option value="select"></option>
            <option value="Male"></option>
            <option value="Female"></option>
          </select>
        </section>
        <section className={styles.continueBtn}>
          <button>continue</button>
        </section>
      </form>
    </>
  );
}

export default BookingTravelDetails;
