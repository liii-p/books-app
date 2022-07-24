import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookList from "./BookList";
import styles from "../Search-Results/Results.module.scss";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "",
    };
  }

  searchBook = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}&maxResults=40`
    );

    const book = await response.json();
    return book.items.then((data) => {
      const cleanData = this.cleanData(data);
      this.setState({ books: cleanData });
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishDate"] = "N/A";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6",
        };
      }

      return book;
    });
    return cleanedData;
  };

  render() {
    return (
      <div className={styles.Results}>
        <SearchBar
          handleSearch={this.handleSearch}
          searchBook={this.searchBook}
          className={styles.Search}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Results;
