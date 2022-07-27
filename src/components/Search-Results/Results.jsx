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

  handleFetch = async (searchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`
    );
    const data = await response.json();
    const { items } = await data;
    const books = items.map(async ({ volumeInfo }) => {
      const { title, authors, description, imageLinks } = await volumeInfo;
      const thumbnail = imageLinks === undefined ? "" : imageLinks.thumbnail;
      return { title, authors, description, thumbnail };
    });
    const updated = Promise.all(books);
    this.setState({ books: updated });
  };

  handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  // cleanData = (data) => {
  //   const cleanedData = data.body.items.map((book) => {
  //     if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
  //       book.volumeInfo["publishDate"] = "N/A";
  //     } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
  //       book.volumeInfo["imageLinks"] = {
  //         thumbnail:
  //           "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6",
  //       };
  //     }

  //     return book;
  //   });
  //   return cleanedData;
  // };

  render() {
    return (
      <div className={styles.Results}>
        <SearchBar
          handleSearch={this.handleSearch}
          handleFetch={this.handleFetch}
          className={styles.Search}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Results;
