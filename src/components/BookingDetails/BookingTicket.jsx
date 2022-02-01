import React from "react";
import styles from "./BookingTicket.module.css";

function BookingTicket({ bookingResult }) {
  const bookingFlightDetails = bookingResult.map((ticket, i) => {
    return (
      <>
        <section className={styles.ticket} key={i}>
          <div className={styles.flightBrand}>
            <h3>{ticket.flightNumber}</h3>
          </div>
          <div className={styles.flightTime}>
            <ul>
              <li>
                <h5>{ticket.departure}</h5>
                <span>{ticket.origin}</span>
              </li>
              <li>
                <h5>{ticket.arrival}</h5>
                <span>{ticket.destination}</span>
              </li>
            </ul>
          </div>
          <div className={styles.cabin}></div>
        </section>
      </>
    );
  });
  return <>{bookingFlightDetails}</>;
}

export default BookingTicket;
