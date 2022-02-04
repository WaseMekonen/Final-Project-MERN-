import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Screens/Home/Home";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./Screens/booking/booking";
import ProviderWrapper from "./components/ProviderWrapper/ProviderWrapper";

import styles from "./App.module.css";

const App = () => {
  const [auth, setAuth] = useState(null);
  const [oneWayTickests, setOneWayTickests] = useState([]);
  const [roundTripTickests, setRoundTripTickests] = useState([]);
  const [search, setSearch] = useState([]);
  const [radio, setRadio] = useState("roundTrip");
  const [bookingResult, setBookingResult] = useState([]);

  return (
    <ProviderWrapper>
      <BrowserRouter>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
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
    </ProviderWrapper>
  );
};
export default App;
