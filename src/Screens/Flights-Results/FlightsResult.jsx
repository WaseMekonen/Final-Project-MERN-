import React from "react";
import FlightDetails from "../../components/FlightDetails";
import styles from "./FlightsResult.module.css";

export default function FlightsResult({
  oneWayTickests,
  search,
  roundTripTickests,
  radio,
}) {
  return (
    <div>
      <FlightDetails
        search={search}
        oneWayTickests={oneWayTickests}
        roundTripTickests={roundTripTickests}
        radio={radio}
      />
      <footer className={styles.footer}></footer>
    </div>
  );
}
