import React from "react";
import styles from "../Screens/Flights-Results/FlightsResult.module.css";

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
        {foundTickets
          ? foundTickets.map((ticket) => {
              return (
                <div className={styles.ticket}>
                  <section className={styles.flightDetails}>
                    <div className="flight num">
                      <h4>{ticket.flightNumber}</h4>
                    </div>
                    <div className="depArvTime">
                      <h4>
                        {ticket.departure} - {ticket.arrival}
                      </h4>
                    </div>
                    <div className="fromTo">
                      <h4>{ticket.origin}</h4>
                      <h4>{ticket.destination}</h4>
                    </div>
                    <div className="total">
                      <h4>{ticket.terminal}</h4>
                      <h4>06h 00m</h4>
                    </div>
                  </section>
                  <section className={styles.flightPrice}>
                    <div className="icon">
                      <span>icon</span>
                    </div>
                    <div className="price">
                      <span>400$</span>
                    </div>
                    <div className="button">
                      <button>Book</button>
                    </div>
                  </section>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default FlightDetails;
