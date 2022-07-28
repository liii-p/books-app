import styles from "./App.module.scss";
import React from "react";
import Header from "./Header";
import Results from "./components/Search-Results/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSubmit={handleSubmit} />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
