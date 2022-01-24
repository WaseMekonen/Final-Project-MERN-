import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Screens/Home/Home";
import styles from "./App.module.css";

const URL = "/data/elalRouts.json";

function App() {
  const [airports, setAirports] = useState([]);

  const getAirports = () => {
    axios
      .get(URL)
      .then((response) => {
        setAirports(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAirports();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.routing}>
          <div className={styles.logo}>
            <img src="/images/elal.png" alt="" />
          </div>
          <div className={styles.links}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <div className={styles.loginBtn}>
            <Link to="/signIn">Login</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home setAirports={setAirports} airports={airports} />
            )}
          />
          <Route exact path="/avout" />
          <Route exact path="/contact" />
          <Route exact path="/signIn" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
