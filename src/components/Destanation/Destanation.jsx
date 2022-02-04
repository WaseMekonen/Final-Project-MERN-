import React from "react";
import styles from "./Destanation.module.css";

const Destanation = ({ city, price, airport, image }) => {
  return (
    <div className={styles.destanation}>
      <img src={image} alt={city} />
      <div>
        <h2>{city}</h2>
        <h4>{price}</h4>
        <h4>{airport}</h4>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Destanation;
