import React from "react";
import styles from "../Screens/Flights-Results/FlightsResult.module.css";
import Tickets from "./Tickets";

function FlightDetails({ search, foundTickets }) {
  return (
    <div className={styles.FlightsResultContainer}>
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
                    {ticket.defartureDate}
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
      <div className={styles.results}>
        <Tickets foundTickets={foundTickets} />
      </div>
    </div>
  );
}

export default FlightDetails;
