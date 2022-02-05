import React, { useContext } from "react";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import OneWayTickets from "../../components/OneWayTickets/OneWayTickets";
import { AppContext } from "../../components/ProviderWrapper/ProviderWrapper";
import RoundTripTickets from "../../components/RoundTripTickets/RoundTripTickets";
// import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./FlightsResult.module.css";

const FlightsResult = ({
  oneWayTickests,
  search,
  roundTripTickests,
  radio,
  setBookingResult,
}) => {
  const { tickets } = useContext(AppContext);
  console.log("tickets: ", tickets);
  return (
    <>
      <header className={styles.FlightsResultHeader}>
        {/* <SearchBar className={styles.resultPageSearchBar}/> */}
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
};
export default FlightsResult;
