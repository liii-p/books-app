export const handleFetch = async (searchTerm, maxResults = 40) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}`;

  const response = await fetch(url);
  const json = await response.json();
  return json.items;
};

export const getBook = async (bookId) => {
  const url = "https://www.googleapis.com/books/v1/volumes/";
  const response = await fetch(url + bookId);
  const json = await response.json();
  return json;
};
