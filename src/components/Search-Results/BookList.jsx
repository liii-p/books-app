import React from "react";
import styles from "./BookList.module.scss";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className={styles.BookList}>
      {props.books.map((book, i) => {
        return (
          <BookCard
            className={styles.BookList__desc}
            key={i}
            img={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            pubDate={book.volumeInfo.publishedDate}
            desc={book.volumeInfo.description}
          />
        );
      })}
    </div>
  );
};

export default BookList;
