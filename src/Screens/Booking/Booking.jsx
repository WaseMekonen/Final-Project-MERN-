import React from "react";
import BookingPricing from "../../components/BookingDetails/BookingPricing/BookingPricing";
import BookingProcess from "../../components/BookingDetails/BookingProcess/BookingProcess";
import BookingTicket from "../../components/BookingDetails/BookingTicket/BookingTicket";
import BookingTravelDetails from "../../components/BookingDetails/BookingTravelDetails/BookingTravelDetails";

import styles from "./Booking.module.css";

const Booking = ({ bookingResult }) => {
  return (
    <div className={styles.bookingContainer}>
      <section className={styles.ticketingProcess}>
        <BookingProcess />
      </section>
      <section className={styles.totalDetails}>
        <article className={styles.flightDetails}>
          <div className={styles.currentFlight}>
            <div className={styles.flightDetailsHeading}>
              <h3>Flight Details</h3>
            </div>
            <article className={styles.bookingFlightDetails}>
              <BookingTicket bookingResult={bookingResult} />
            </article>
          </div>

          <div className={styles.travelerDetails}>
            <div className={styles.travelerDetailsHeading}>
              <h3>Traveler Details</h3>
            </div>
            <BookingTravelDetails />
          </div>
        </article>
        <article className={styles.pricingContainer}>
          <BookingPricing />
        </article>
      </section>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Booking;

// <h3>{ticket.flighNumber}</h3>
//               <h3>{ticket.departure}</h3>
//               <h3>{ticket.arrival}</h3>
//               <h3>{ticket.origin}</h3>
//               <h3>{ticket.destination}</h3>
