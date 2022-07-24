import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  return (
    <div className={styles.SearchBar}>
      <form onSubmit={props.searchBook} action="">
        <input
          type="text"
          onChange={props.handleSearch}
          placeholder="Search for a book!"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
