import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Screens/Home/Home";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./Screens/booking/booking";
import { getData } from "./Utils/clientFunctions";
import styles from "./App.module.css";

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
  const [bookingResult, setBookingResult] = useState([]);

  useEffect(() => {
    getData(airportUrl, setAirports);
  }, []);

  useEffect(() => {
    getData(flightUrl, setFlighSchedule);
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.app}>
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
            <Link to="/booking">Booking</Link>
          </div>
          <div className={styles.login}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
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
                setSearch={setSearch}
                radio={radio}
                setRadio={setRadio}
              />
            )}
          />
          <Route exact path="/about" />
          <Route
            exact
            path="/booking"
            component={() => (
              <Booking setAuth={setAuth} bookingResult={bookingResult} />
            )}
          />
          <Route
            exact
            path="/flightsResult"
            component={() => (
              <FlightsResult
                oneWayTickests={oneWayTickests}
                search={search}
                roundTripTickests={roundTripTickests}
                radio={radio}
                setBookingResult={setBookingResult}
              />
            )}
          />
          <Route exact path="/contact" />
          <Route
            exact
            path="/login"
            component={() => <Login setAuth={setAuth} />}
          />
          <Route
            exact
            path="/register"
            component={() => <Register setAuth={setAuth} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
