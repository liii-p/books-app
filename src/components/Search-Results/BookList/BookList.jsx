import React from "react";
import styles from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({ book }) => {
  return (
    <div className={styles.BookList}>
      {book.map((book, i) => {
        return (
          <BookCard className={styles.BookList__desc} bookData={book} key={i} />
        );
      })}
    </div>
  );
};

export default BookList;
