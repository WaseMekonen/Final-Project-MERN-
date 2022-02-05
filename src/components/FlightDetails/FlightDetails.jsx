import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FlightDetails.module.css";

function FlightDetails({ search }) {
  return (
    <>
      {search && (
        <form className={styles.userSearch} key={search.origin}>
          <div className={styles.searchInputs}>
            <input
              className={styles.FromInput}
              type="text"
              placeholderText="Origin"
            />
          </div>
          <div className={styles.searchInputs}>
            <input
              type="text"
              className={styles.ToInput}
              placeholderText="Destanition"
            />
          </div>
          <div className={styles.searchInputs}>
            <DatePicker
              className={styles.departureInput}
              placeholderText="Departure"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            ></DatePicker>
          </div>
          <div className={styles.searchInputs}>
            <DatePicker
              className={styles.returnInput}
              placeholderText="Return"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            ></DatePicker>
          </div>
          <div className={styles.searchInputs}>
            <input
              className={styles.changeFlightBtn}
              type="submit"
              value="Search Flights"
            />
          </div>
        </form>
      )}
    </>
  );
}

export default FlightDetails;
