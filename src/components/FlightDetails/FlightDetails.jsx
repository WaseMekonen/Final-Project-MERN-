import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import styles from "./FlightDetails.module.css";

function FlightDetails({ search }) {
  return (
    <>
      {search
        ? search.map((ticket, i) => {
            return (
              <section className={styles.userSearch} key={i}>
                <div className={styles.userInputsTfrom}>
                  <input type="text" placeholder={ticket.origin} />
                  <FaExchangeAlt className={styles.changeDirection}>
                    Change Direction
                  </FaExchangeAlt>
                </div>

                <input
                  className={styles.userInputsTo}
                  type="text"
                  placeholder={ticket.destination}
                />

                <input
                  className={styles.userInputsDate}
                  type="text"
                />

                <input className={styles.userChangeFlight} type="submit" />
              </section>
            );
          })
        : ""}
    </>
  );
}

export default FlightDetails;
