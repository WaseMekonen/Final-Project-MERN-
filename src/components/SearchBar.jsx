import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../src/Screens/Home/Home.module.css";
import FlightType from "./FlightType";

export default function SearchBar({
  radio,
  setRadio,
  searchedFlight,
  onChangHandler,
  onSuggestHandler,
  origin,
  setOrigin,
  destination,
  setDestination,
  defartureDate,
  setDefartureDate,
  returnDate,
  setReturnDate,
  setPassengers,
  suggestionsOrigin,
  setSuggestionsOrigin,
  suggestionsDestination,
  setSuggestionsDestination,
}) {
  return (
    <div>
      <div className={styles.bookingContainer}>
        <FlightType setRadio={setRadio} radio={radio} />
        <form
          className={styles.flightForm}
          onSubmit={(e) => {
            e.preventDefault();
            searchedFlight();
          }}
        >
          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Origin "
              onChange={(e) =>
                onChangHandler(e.target.value, setOrigin, setSuggestionsOrigin)
              }
              value={origin}
            />
            {suggestionsOrigin.length > 0 ? (
              <div className={styles.suggestionorigin}>
                {suggestionsOrigin &&
                  suggestionsOrigin.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() =>
                          onSuggestHandler(
                            suggestion.city,
                            setOrigin,
                            setSuggestionsOrigin
                          )
                        }
                      >
                        {suggestion.city}
                      </div>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Destination "
              onChange={(e) =>
                onChangHandler(
                  e.target.value,
                  setDestination,
                  setSuggestionsDestination
                )
              }
              value={destination}
            />
            {suggestionsDestination.length > 0 ? (
              <div className={styles.suggestiondestination}>
                {suggestionsDestination &&
                  suggestionsDestination.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() =>
                          onSuggestHandler(
                            suggestion.city,
                            setDestination,
                            setSuggestionsDestination
                          )
                        }
                      >
                        {suggestion.city}
                      </div>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
          {radio == "roundTrip" ? (
            <>
              <div className={styles.formInputs}>
                <DatePicker
                  placeholderText="Departure"
                  selected={defartureDate}
                  onChange={(Date) => setDefartureDate(Date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  maxDate={returnDate}
                ></DatePicker>
              </div>
              <div className={styles.formInputs}>
                <DatePicker
                  placeholderText="Return"
                  selected={returnDate}
                  onChange={(Date) => setReturnDate(Date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={defartureDate ? defartureDate : new Date()}
                ></DatePicker>
              </div>
            </>
          ) : (
            <div className={styles.formInputs}>
              <DatePicker
                placeholderText="Departure"
                selected={defartureDate}
                onChange={(Date) => setDefartureDate(Date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={returnDate}
              ></DatePicker>
            </div>
          )}
          <div className={styles.formInputs}>
            <input
              placeholder="Passengers"
              type="number"
              min={1}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <div className={styles.formInputsSearch}>
            <input type="submit" value="Search Flight" />
          </div>
        </form>
        <div className={styles.searchflight}></div>
      </div>
    </div>
  );
}
