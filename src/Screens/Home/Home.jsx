import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";

export default function Home({
  setOneWayTickests,
  setRoundTripTickests,
  setSearch,
  radio,
  setRadio,
}) {
  return (
    <div>
      <header className={styles.header}>
        <SearchBar
          setOneWayTickests={setOneWayTickests}
          setRoundTripTickests={setRoundTripTickests}
          setSearch={setSearch}
          radio={radio}
          setRadio={setRadio}
        />
      </header>
      <main className={styles.main}>
        <div className={styles.destinationImagesContainer}>
          <div className={styles.destanation}>
            <img src="images/paris.jpg" alt="paris" />
            <div className={styles.destanationDetails}>
              <h2>Paris,France</h2>
              <h4>$340</h4>
              <h4>TLV-PAR</h4>
              <button>Book</button>
            </div>
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
