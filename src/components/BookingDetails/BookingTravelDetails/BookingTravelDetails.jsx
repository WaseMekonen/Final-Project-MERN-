import React from "react";
import styles from "./BookingTravelDetails.module.css";
function BookingTravelDetails() {
  return (
    <>
      <form className={styles.form}>
        <section className={styles.emailInput}>
          <input type="email" placeholder="Email" required />
        </section>
        <section className={styles.travelDetailInputs}>
          <input
            className={styles.nameInput}
            type="text"
            placeholder="First Name"
          />
          <input
            className={styles.lastNameInput}
            type="text"
            placeholder="Last Name"
          />
          <input
            className={styles.birthDayInput}
            type="text"
            placeholder=" Date Of Birth"
          />
          <select className={styles.selectOption}>
            <option value={"select"}>select</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </section>
        <section className={styles.continue}>
          <button className={styles.continueBtn}> Continue</button>
        </section>
      </form>
    </>
  );
}

export default BookingTravelDetails;
