import React from "react";
import styles from "./Booking.module.css";

function Booking({ bookingResult }) {
  const bookingElemments = bookingResult.map((ticket) => {
    return <h1>{ticket.flightNumber}</h1>;
  });

  return (
    <>
      <div className={styles.bookingContainer}>
        <section className={styles.ticketingProcess}>
          <h2>hello</h2>
        </section>
        <section className={styles.totalDetails}>
          <article className={styles.flightDetails}>
            <div className={styles.currentFlight}></div>
            <div className={styles.travelerDetails}></div>
            <button>continue</button>
          </article>
          <article className={styles.pricing}></article>
        </section>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export default Booking;
