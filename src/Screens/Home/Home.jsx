import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Home.module.css";

export default function Home({ airports }) {
  const [radio, setRadio] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [defartureDate, setDefartureDate] = useState("");
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState("");
  const [suggestionsFrom, setSuggestionsFrom] = useState([]);
  const [suggestionsTo, setSuggestionsTo] = useState([]);
  const [search, setSearch] = useState([]);

  const onChangHandler = (text, setValue, setSuggestions) => {
    let matches = [];
    if (text.length > 0) {
      matches = airports.filter((airport) => {
        const regex = new RegExp(`${text}`, "gi");
        return airport.city.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setValue(text);
  };

  const onSuggestHandler = (text, setText, setState) => {
    setText(text);
    setState([]);
  };

  const searchedFlight = () => {
    let searchedArr = [];
    if (from === to) {
      alert("You cant choose the same city");
    } else {
      searchedArr.push({
        from: from,
        to: to,
        Defarture: defartureDate,
        return: returnDate,
        passengers: passengers,
      });
    }
    setSearch(searchedArr);
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
            />{" "}
            Round Trip
            <input
              type="radio"
              value="oneWay"
              type="radio"
              checked={radio == "oneWay"}
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />{" "}
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
              <label>Flying from</label>
              <input
                type="text"
                placeholder="City "
                onChange={(e) =>
                  onChangHandler(e.target.value, setFrom, setSuggestionsFrom)
                }
                value={from}
              />
              {suggestionsFrom.length > 0 ? (
                <div className={styles.suggestionFrom}>
                  {suggestionsFrom &&
                    suggestionsFrom.map((suggestion, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() =>
                            onSuggestHandler(
                              suggestion.city,
                              setFrom,
                              setSuggestionsFrom
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
              <label>To</label>
              <input
                type="text"
                placeholder="City "
                onChange={(e) =>
                  onChangHandler(e.target.value, setTo, setSuggestionsTo)
                }
                value={to}
              />
              {suggestionsTo.length > 0 ? (
                <div className={styles.suggestionTo}>
                  {suggestionsTo &&
                    suggestionsTo.map((suggestion, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() =>
                            onSuggestHandler(
                              suggestion.city,
                              setTo,
                              setSuggestionsTo
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
  /* <form/
            className={styles.formContainer}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="From"
              onChange={(e) => onChangHandler(e.target.value)}
              value={from}
            />
            <input
              type="text"
              placeholder="To"
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="passengers"
              min={0}
              max={5}
              onChange={(e) => {
                setPassengers(e.target.value);
              }}
            />
            <input type="submit" value="Search" />
            <div className={styles.suggestions}>
              {suggestions &&
                suggestions.map((suggestion, i) => {
                  return (
                    <div
                      className={styles.suggestion}
                      key={i}
                      onClick={() => onSuggestHandler(suggestion.city)}
                    >
                      {suggestion.city}
                    </div>
                  );
                })}
            </div>
          </form> */
}
