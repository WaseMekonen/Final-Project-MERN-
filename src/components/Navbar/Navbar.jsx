import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
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
  );
};
export default Navbar;
