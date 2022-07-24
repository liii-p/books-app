import styles from "./App.module.scss";
import React from "react";
import Header from "./Header";
import Results from "./components/Search-Results/Results";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Results />
    </div>
  );
}

export default App;
