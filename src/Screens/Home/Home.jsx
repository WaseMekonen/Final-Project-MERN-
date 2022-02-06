import Destanation from "../../components/Destanation/Destanation";
import SearchBar from "../../components/SearchBar/SearchBar";
import destanationData from "../../Utils/destanationData.json";
import styles from "./Home.module.css";

const Home = ({
  setOneWayTickests,
  setRoundTripTickests,
  setSearch,
  radio,
  setRadio,
}) => {


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
          {destanationData.map((dData) => {
            return <Destanation {...dData} key={dData.city} />;
          })}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Home;
