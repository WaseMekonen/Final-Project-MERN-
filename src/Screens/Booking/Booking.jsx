import React from "react";
import BookingTicket from "../../components/BookingDetails/BookingTicket";
import styles from "./Booking.module.css";

function Booking({ bookingResult }) {
  console.log(bookingResult);
  return (
    <>
      <div className={styles.bookingContainer}>
        <section className={styles.ticketingProcess}>
          <h2>hello</h2>
        </section>
        <section className={styles.totalDetails}>
          <article className={styles.flightDetails}>
            <div className={styles.currentFlight}>
              <article className={styles.bookingFlightDetails}>
                <BookingTicket bookingResult={bookingResult} />
              </article>
            </div>
            <div className={styles.travelerDetails}></div>
          </article>
          <article className={styles.pricing}></article>
        </section>
        <button>continue</button>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export default Booking;

// <h3>{ticket.flighNumber}</h3>
//               <h3>{ticket.departure}</h3>
//               <h3>{ticket.arrival}</h3>
//               <h3>{ticket.origin}</h3>
//               <h3>{ticket.destination}</h3>
