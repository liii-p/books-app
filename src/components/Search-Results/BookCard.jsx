import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = (props) => {
  return (
    <div className={styles.BookCard}>
      <img src={props.img} alt="" width="200" height="300" />
      <div className={styles.BookCard__desc}>
        <h2 className={styles.BookCard__title}>{props.title}</h2>
        <h3 className={styles.BookCard__author}>Author: {props.author}</h3>
        <p className={styles.BookCard__pubDate}>
          Date Published: {props.pubDate}
        </p>
        <p className={styles.BookCard__desc}>{props.desc}</p>
      </div>
    </div>
  );
};

export default BookCard;
