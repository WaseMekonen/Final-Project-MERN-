import React from "react";
import styles from "./BookingTicket.module.css";

function BookingTicket({ bookingResult }) {
  const bookingFlightDetails = bookingResult.map((ticket, i) => {
    return (
      <>
          
        <section className={styles.ticket} key={ticket.id}>
          <div className={styles.flightBrand}>
            <h3>{ticket.flightNumber}</h3>
          </div>
          <div className={styles.flightTime}>
            <ul>
              <li>
                <h4>{ticket.departure}</h4>
                <h5>{ticket.originCode}</h5>
                <span>{ticket.origin}</span>
              </li>
              <li>
                <h4>{ticket.arrival}</h4>
                <h5>{ticket.destinationCode}</h5>
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
