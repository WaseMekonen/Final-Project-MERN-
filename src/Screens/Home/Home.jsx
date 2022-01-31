import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "./Home.module.css";

export default function Home({
  airports,
  flightsSchedule,
  setOneWayTickests,
  setRoundTripTickests,
  setSearch,
  radio,
  setRadio,
}) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState("");
  const [suggestionsOrigin, setSuggestionsOrigin] = useState([]);
  const [suggestionsDestination, setSuggestionsDestination] = useState([]);
  const [disable, setDisable] = useState(true);

  // const [result, setResult] = useState([]);

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
      return;
    } else {
      searchedArr.push({
        origin: origin,
        destination: destination,
        departure: departureDate,
        return: returnDate,
        passengers: passengers,
      });
    }
    setSearch(searchedArr);
    const systemOneWayTickets = flightsSchedule.filter(
      (flight) =>
        flight.origin.includes(origin) &&
        flight.destination.includes(destination)
    );
    const systemRoundTripTickests = flightsSchedule.filter(
      (flight) =>
        flight.origin.includes(destination) &&
        flight.destination.includes(origin)
    );
    setOneWayTickests(systemOneWayTickets);
    setRoundTripTickests(systemRoundTripTickests);

    console.log({ systemOneWayTickets });
    console.log({ systemRoundTripTickests });
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.slogen}>
          <h1>Explore</h1>
          <h2>Your destination with us</h2>
        </div>
        <SearchBar
          radio={radio}
          setRadio={setRadio}
          searchedFlight={searchedFlight}
          onChangHandler={onChangHandler}
          onSuggestHandler={onSuggestHandler}
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          setPassengers={setPassengers}
          passengers={passengers}
          suggestionsOrigin={suggestionsOrigin}
          setSuggestionsOrigin={setSuggestionsOrigin}
          suggestionsDestination={suggestionsDestination}
          setSuggestionsDestination={setSuggestionsDestination}
          disable={disable}
          setDisable={setDisable}
        />
      </header>
      <main className={styles.main}>
        <div className={styles.cheapFlights}>
          <h2>Cheap tickets to popular cities</h2>
          <hr></hr>
        </div>
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
