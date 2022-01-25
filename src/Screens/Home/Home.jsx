import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Home.module.css";

export default function Home({ airports, flightsSchedule }) {
  const [radio, setRadio] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [defartureDate, setDefartureDate] = useState("");
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState("");
  const [suggestionsOrigin, setSuggestionsOrigin] = useState([]);
  const [suggestionsDestination, setSuggestionsDestination] = useState([]);
  const [search, setSearch] = useState([]);
  const [result, setResult] = useState([]);

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
    let searchedArr = [];
    if (origin === destination) {
      alert("You cant choose the same city");
      setDestination(""), setOrigin("");
    } else {
      searchedArr.push({
        origin: origin,
        destination: destination,
        defarture: defartureDate,
        return: returnDate,
        passengers: passengers,
      });
    }
    setSearch(searchedArr);

    let foundTicket = flightsSchedule.filter((tickets) =>
      tickets.origin.includes(origin && destination)
    );
    console.log(foundTicket);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.slogen}>
          <h1>Explore</h1>
          <h2>Your destination with us</h2>
        </div>
        <div className={styles.bookingContainer}>
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
              type="radio"
              value="oneWay"
              type="radio"
              checked={radio == "oneWay"}
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
            One Way
          </div>
          <form
            className={styles.flightForm}
            onSubmit={(e) => {
              e.preventDefault();
              searchedFlight();
            }}
          >
            <div className={styles.formInputs}>
              <label>Origin</label>
              <input
                type="text"
                placeholder="City "
                onChange={(e) =>
                  onChangHandler(
                    e.target.value,
                    setOrigin,
                    setSuggestionsOrigin
                  )
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
              <label>Destination</label>
              <input
                type="text"
                placeholder="City "
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
            <div className={styles.formInputs}>
              <label>Defarture</label>
              <DatePicker
                selected={defartureDate}
                onChange={(Date) => setDefartureDate(Date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              ></DatePicker>
            </div>
            <div className={styles.formInputs}>
              <label>Return</label>
              <DatePicker
                selected={returnDate}
                onChange={(Date) => setReturnDate(Date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              ></DatePicker>
            </div>
            <div className={styles.formInputs}>
              <label>Passengers</label>
              <input
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
      </header>
      <main className={styles.main}>
        <div className={styles.destinationImagesContainer}>
          <div className={styles.destanation}>
            <img src="images/paris.jpg" alt="paris" />
          </div>
          <div className={styles.destanation}>
            <img src="images/berlin.jpg" alt="berlin" />
          </div>
          <div className={styles.destanation}>
            <img src="images/rome.jpg" alt="rome" />
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

{
  /* <SearchBar
          radio={radio}
          setRadio={setRadio}
          searchedFlight={searchedFlight}
          onChangHandler={onChangHandler}
          onSuggestHandler={onSuggestHandler}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          defartureDate={defartureDate}
          setDefartureDate={setDefartureDate}
          setReturnDate={setReturnDate}
          setPassengers={setPassengers}
          suggestionsOrigin={suggestionsOrigin}
          setSuggestionsOrigin={setSuggestionsOrigin}
          suggestionsDestination={suggestionsDestination}
          setSuggestionsDestination={setSuggestionsDestination}
        /> */
}
