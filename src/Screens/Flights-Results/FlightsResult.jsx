import React from "react";
import FlightDetails from "../../components/FlightDetails";
import styles from "./FlightsResult.module.css";

export default function FlightsResult({ foundTickets, search }) {
  return (
    <div>
      <FlightDetails search={search} foundTickets={foundTickets} />

      <footer className={styles.footer}></footer>
    </div>
  );
}
