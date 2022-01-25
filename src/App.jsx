import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Screens/Home/Home";
import { getData } from "./Utils/clientFunctions";
import styles from "./App.module.css";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";

const flightUrl = "/data/flightsSchedule.json";
const airportUrl = "/data/elalRouts.json";
function App() {
  const [airports, setAirports] = useState([]);
  const [flightsSchedule, setFlighSchedule] = useState([]);

  useEffect(() => {
    getData(airportUrl, setAirports);
  }, []);

  useEffect(() => {
    getData(flightUrl, setFlighSchedule);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.routing}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/images/elal.png" alt="" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signIn">Login</Link>
            <Link to="/flightsResult">FlightResult</Link>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                setAirports={setAirports}
                airports={airports}
                setFlighSchedule={setFlighSchedule}
                flightsSchedule={flightsSchedule}
              />
            )}
          />
          <Route exact path="/about" />
          <Route path="/flightsResult" component={FlightsResult} />
          <Route exact path="/contact" />
          <Route exact path="/signIn" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
