import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Generator from "./components/Generator/Generator";
import Navbar from "./components/Navbar/Navbar";
import Connect from './Connect'

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {!login ? (
        <div className={styles.container}>
          <Connect login={login} setLogin={setLogin} />
        </div>
      ) : (
        <div className={styles.container}>
          <Navbar />
          <Generator />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
