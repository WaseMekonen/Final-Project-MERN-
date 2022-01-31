import React from "react";
import FlightDetails from "../../components/FlightDetails";
import styles from "./FlightsResult.module.css";

export default function FlightsResult({
  oneWayTickests,
  search,
  roundTripTickests,
  radio,
  setBookingResult,
}) {
  return (
    <div>
      <FlightDetails
        search={search}
        oneWayTickests={oneWayTickests}
        roundTripTickests={roundTripTickests}
        radio={radio}
        setBookingResult={setBookingResult}
      />
      <footer className={styles.footer}></footer>
    </div>
  );
}
