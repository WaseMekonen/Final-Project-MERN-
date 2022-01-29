import React from "react";
import styles from "../Screens/Flights-Results/FlightsResult.module.css";

function OneWay({ oneWayTickests }) {
  const oneWayElements = oneWayTickests
    ? oneWayTickests.map((ticket, i) => (
        <div className={styles.ticket} key={i}>
          <section className={styles.flightDetails}>
            <div className={styles.ticketOne}>
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
      ))
    : null;

  return <>{oneWayElements}</>;
}

export default OneWay;
