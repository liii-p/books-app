export const bookData = (book) => {
  // Handle missing data with ternary
  const title = book.volumeInfo.title ? book.volumeInfo.title : "No Title";
  const authors = book.volumeInfo.authors
    ? book.volumeInfo.authors.join(", ")
    : "Unknown Author";
  const desc = book.volumeInfo.description
    ? book.volumeInfo.description
    : "No description";
  const pages = book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 0;
  const date = book.volumeInfo.publishedDate
    ? book.volumeInfo.publishedDate
    : "Unknown";
  const isbn = book.volumeInfo.industryIdentifiers
    ? book.volumeInfo.industryIdentifiers[
        book.volumeInfo.industryIdentifiers.length - 1
      ].identifier
    : "Unknown";
  const lang = book.volumeInfo.language ? book.volumeInfo.language : "Unknown";
  const categories = book.volumeInfo.categories
    ? book.volumeInfo.categories.join(", ")
    : "None";
  const publisher = book.volumeInfo.publisher
    ? book.volumeInfo.publisher
    : "Unknown Publisher";

  return {
    Title: title,
    Authors: authors,
    Pages: pages,
    "Published Date": date,
    ISBN: isbn,
    Publisher: publisher,
    Language: lang,
    Genres: categories,
    Description: desc,
  };
};

export const imageOrAltElement = (book, bookStyle, altStyle) => {
  return book.volumeInfo.imageLinks ? (
    <img
      className={bookStyle}
      src={book.volumeInfo.imageLinks.thumbnail}
      alt={book.volumeInfo.title}
    />
  ) : (
    <p className={altStyle}>{book.volumeInfo.title}</p>
  );
};
