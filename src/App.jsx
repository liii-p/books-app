import styles from "./App.module.scss";
import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    const [displayBooks, setDisplayBooks] = useState([]);
    const [input, setInput] = useState("");

    // Talk to the API
    // We need search term to send to API
    // We need to fetch the data from API
    //

    const handleChange = (event) => {
        console.log("Event:", event.target.value);
        const value = event.target.value;
        console.log("Value:", value);
        setInput(value);
    };

    // useEffect(() => {
    //     setSearch(input);
    // }, [input]);

    const handleSubmit = async (input) => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40`,
        );

        console.log("Input:", input);

        const data = await response.json();
        console.log(
            data.items.map((book) => {
                return book.volumeInfo;
            }),
        );
    };

    return (
        <div className={styles.App}>
            <Header />
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
            {/* <BookList /> */}
        </div>
    );
}

export default App;
