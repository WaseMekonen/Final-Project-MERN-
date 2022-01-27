import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import styles from "./Home.module.css";

export default function Home({
  airports,
  flightsSchedule,
  setOneWayTickests,
  setRoundTripTickests,
  setSearch,
}) {
  const [radio, setRadio] = useState("roundTrip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [defartureDate, setDefartureDate] = useState("");
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState("");
  const [suggestionsOrigin, setSuggestionsOrigin] = useState([]);
  const [suggestionsDestination, setSuggestionsDestination] = useState([]);
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
    setRoundTripTickests(systemRoundTripTickests)
    console.log(systemOneWayTickets);
    console.log(systemRoundTripTickests);
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
          defartureDate={defartureDate}
          setDefartureDate={setDefartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          setPassengers={setPassengers}
          suggestionsOrigin={suggestionsOrigin}
          setSuggestionsOrigin={setSuggestionsOrigin}
          suggestionsDestination={suggestionsDestination}
          setSuggestionsDestination={setSuggestionsDestination}
        />
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
