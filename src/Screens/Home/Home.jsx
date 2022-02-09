import Destination from "../../components/Destanation/Destanation";
import SearchBar from "../../components/SearchBar/SearchBar";
import destinationData from "../../Utils/destanationData.json";
import styles from "./Home.module.css";

const Home = ({ radio, setRadio }) => {
  return (
    <div>
      <header className={styles.header}>
        <SearchBar />
      </header>
      <main className={styles.main}>
        <div className={styles.destinationImagesContainer}>
          {destinationData.map((dData) => {
            return <Destination {...dData} key={dData.city} />;
          })}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Home;
