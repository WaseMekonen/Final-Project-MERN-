import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Screens/Home/Home";
import { getData } from "./Utils/clientFunctions";
import styles from "./App.module.css";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Booking from "./Screens/Booking/Booking";

const flightUrl = "/data/flightsSchedule.json";
const airportUrl = "/data/elalRouts.json";
function App() {
  const [auth, setAuth] = useState(null);
  const [airports, setAirports] = useState([]);
  const [flightsSchedule, setFlighSchedule] = useState([]);
  const [oneWayTickests, setOneWayTickests] = useState([]);
  const [roundTripTickests, setRoundTripTickests] = useState([]);
  const [search, setSearch] = useState([]);
  const [radio, setRadio] = useState("roundTrip");

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
            <Link to="/flightsResult">FlightResult</Link>
          </div>
          <div className={styles.login}>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
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
                setOneWayTickests={setOneWayTickests}
                setRoundTripTickests={setRoundTripTickests}
                search={search}
                setSearch={setSearch}
                radio={radio}
                setRadio={setRadio}
              />
            )}
          />
          <Route exact path="/about" />
          <Route
            exact
            path="/flightsResult"
            component={() => (
              <FlightsResult
                oneWayTickests={oneWayTickests}
                search={search}
                roundTripTickests={roundTripTickests}
                radio={radio}
              />
            )}
          />
          <Route exact path="/contact" />
          <Route
            exact
            path="/Login"
            component={() => <Login setAuth={setAuth} />}
          />
          <Route
            exact
            path="/Booking"
            component={() => <Booking setAuth={setAuth} />}
          />
          <Route
            exact
            path="/Register"
            component={() => <Register setAuth={setAuth} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
