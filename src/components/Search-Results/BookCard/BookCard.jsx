import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ bookData }) => {
  const {
    title,
    imageLinks,
    authors,
    publishedDate,
    description,
    publisher,
    industryIdentifiers,
  } = bookData;
  return (
    <div className={styles.BookCard}>
      {imageLinks ? (
        <img src={imageLinks.thumbnail} alt="" width="200" height="300" />
      ) : (
        <img
          src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg?ver=6"
          alt="Unavailable"
        />
      )}
      <div className={styles.BookCard__desc}>
        {title ? (
          <h2 className={styles.BookCard__title}>{title}</h2>
        ) : (
          "No title available"
        )}
        {authors ? (
          <h3 className={styles.BookCard__author}>Author: {authors}</h3>
        ) : (
          <h3 className={styles.BookCard__author}>N/A</h3>
        )}
        {publisher ? <p>Publisher: {publisher}</p> : "Publisher: N/A"}
        {publishedDate ? (
          <p className={styles.BookCard__pubDate}>
            Date Published: {publishedDate}
          </p>
        ) : (
          "N/A"
        )}

        {description ? (
          <p className={styles.BookCard__desc}>{description}</p>
        ) : (
          "N/A"
        )}
      </div>
    </div>
  );
};

export default BookCard;
