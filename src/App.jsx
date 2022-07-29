import styles from "./App.module.scss";
import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import BookList from "./components/Search-Results/BookList/BookList";

function App() {
  const [search, setSearch] = useState("");
  const [displayBooks, setDisplayBooks] = useState([]);
  const [input, setInput] = useState("");

  // Talk to the API
  // We need search term to send to API
  // We need to fetch the data from API
  // Return the data

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    setSearch(input);
  }, [input]);

  const handleSubmit = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
    );
    console.log(search);

    const data = await response.json();

    console.log(
      data.items.map((book) => {
        return book.volumeInfo;
      })
    );
    const bookData = data.items.map((book) => {
      return book.volumeInfo;
    });

    setDisplayBooks(bookData);
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.App__SearchBar}>
        <input
          className={styles.App}
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for a book..."
        />
        <button onClick={handleSubmit}>Search</button>
        <p>{`Books currently displayed: ${displayBooks.length}`}</p>
      </div>
      <BookList className={styles.BookList__desc} book={displayBooks} />
    </div>
  );
}

export default App;
