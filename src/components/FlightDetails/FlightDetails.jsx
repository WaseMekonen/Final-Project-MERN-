import React from "react";

import styles from "./FlightDetails.module.css";

function FlightDetails({ search }) {
  return (
    <>
      {search
        ? search.map((ticket, i) => {
            return (
              <section className={styles.userSearch} key={i}>
                <div className={styles.userInputsTrom}>
                  <h5>{ticket.origin}</h5>
                </div>
                <div className={styles.userInputsTo}>
                  <h5>{ticket.destination}</h5>
                </div>
                <div className={styles.userInputsDate}>
                  <h5>
                    {ticket.departureDate}
                    {ticket.returnDate}
                  </h5>
                </div>
                <div className={styles.userChangeFlight}>
                  <h5></h5>
                </div>
              </section>
            );
          })
        : ""}
    </>
  );
}

export default FlightDetails;
