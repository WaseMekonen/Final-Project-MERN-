import React from "react";
import styles from "./FlightType.module.css";

function FlightType({ setRadio, radio }) {
  return (
    <div>
      <div className={styles.flightType}>
        <input
          value="roundTrip"
          type="radio"
          checked={radio == "roundTrip"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        Round Trip
        <input
          value="oneWay"
          type="radio"
          checked={radio == "oneWay"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        One Way
      </div>
    </div>
  );
}

export default FlightType;
