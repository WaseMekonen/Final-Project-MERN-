import React from "react";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import OneWayTickets from "../../components/OneWayTickets/OneWayTickets";
import RoundTripTickets from "../../components/RoundTripTickets/RoundTripTickets";
import styles from "./FlightsResult.module.css";

export default function FlightsResult({
  oneWayTickests,
  search,
  roundTripTickests,
  radio,
  setBookingResult,
}) {
  return (
    <>
      <header className={styles.FlightsResultHeader}>
        <FlightDetails
          search={search}
          oneWayTickests={oneWayTickests}
          roundTripTickests={roundTripTickests}
          radio={radio}
          setBookingResult={setBookingResult}
        />
      </header>
      <main className={styles.FlightsResultContainer}>
        {radio == "roundTrip" ? (
          <div className={styles.resultsForRoudTrip}>
            <RoundTripTickets
              roundTripTickests={roundTripTickests}
              oneWayTickests={oneWayTickests}
              setBookingResult={setBookingResult}
            />
          </div>
        ) : (
          <div className={styles.resultsForOneWay}>
            <OneWayTickets oneWayTickests={oneWayTickests} />
          </div>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
