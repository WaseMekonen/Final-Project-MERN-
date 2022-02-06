import React, { useEffect, useState } from "react";
import FlightType from "../FlightType/FlightType";
import { Link } from "react-router-dom";
import { getData } from "../../Utils/clientFunctions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SearchBar.module.css";

const airportUrl = "/data/elalRouts.json";
const flightUrl = "/data/flightsSchedule.json";

const SearchBar = ({
  setOneWayTickests,
  setRoundTripTickests,
  setSearch,
  radio,
  setRadio,
}) => {
  const [airports, setAirports] = useState([]);
  const [flightsSchedule, setFlighSchedule] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [suggestionsOrigin, setSuggestionsOrigin] = useState([]);
  const [suggestionsDestination, setSuggestionsDestination] = useState([]);

  useEffect(() => {
    getData(airportUrl, setAirports);
  }, []);

  useEffect(() => {
    getData(flightUrl, setFlighSchedule);
  }, []);

  const onChangHandler = (text, setValue, setSuggestions) => {
    let matches = [];
    if (text.length > 0) {
      matches = airports.filter((airport) => {
        const regex = new RegExp(`${text}`, "gi");
        return airport.city.match(regex);
      });
    }
    setSuggestions(matches);
    setValue(text);
  };

  const onSuggestHandler = (text, setText, setState) => {
    setText(text);
    setState([]);
  };

  const searchedFlight = () => {
    let userFlightSearch = [];
    if (origin === destination) {
      alert("You cant choose the same city");
      return;
    } else {
      userFlightSearch.push({
        origin: origin,
        destination: destination,
        departure: departureDate,
        return: returnDate,
        passengers: passengers,
      });
    }
    setSearch(userFlightSearch);
    const systemTickets = (a, b) =>
      flightsSchedule.filter(
        (flight) => flight.origin.includes(a) && flight.destination.includes(b)
      );
    const systemOneWayTickets = systemTickets(origin, destination);
    const systemRoundTripTickests = systemTickets(destination, origin);
    setOneWayTickests(systemOneWayTickets);
    setRoundTripTickests(systemRoundTripTickests);
  };

  const isValid =
    origin !== "" &&
    destination !== "" &&
    departureDate !== "" &&
    (returnDate !== "" || radio === "oneWay");

  return (
    <>
      <div className={styles.bookingContainer}>
        <FlightType setRadio={setRadio} radio={radio} />
        <form
          className={styles.flightForm}
          onSubmit={(e) => {
            e.preventDefault();
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
                  selected={departureDate}
                  onChange={(Date) => setDepartureDate(Date)}
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
                  minDate={departureDate ? departureDate : new Date()}
                ></DatePicker>
              </div>
            </>
          ) : (
            <div className={styles.formInputs}>
              <DatePicker
                placeholderText="Departure"
                selected={departureDate}
                onChange={(Date) => setDepartureDate(Date)}
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
              value={passengers ? passengers : 1}
              min={1}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <div
            className={
              !isValid
                ? styles.formInputsSearchDisable
                : styles.formInputsSearch
            }
          >
            <Link
              to="/flightsResult"
              className={isValid ? styles.buttonActive : styles.buttonDisable}
              onClick={searchedFlight}
            >
              Search Flight
            </Link>
          </div>
        </form>
        <div className={styles.searchflight}></div>
      </div>
    </>
  );
};

export default SearchBar;
