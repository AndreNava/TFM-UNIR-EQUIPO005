import { useState } from "react";
import { BOOKSDATA } from "../booksData";
import BookList from "./BookList";

export default function Search({ rentedBooks, setRentedBooks }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchBy, setSearchBy] = useState("title");

  function handleSubmit(event) {
    event.preventDefault();

    if (query.trim() === "") {
      alert("Por favor, escribe un término para buscar.");
      return;
    }

    const books = BOOKSDATA;
    const filtered = books.filter((book) =>
      book[searchBy].toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }

  function handleSearchBy(category) {
    setSearchBy(category);
  }

  return (
    <div className="search">
      <h1 className="search__title">Buscar por:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="opciones"
            value="ISBN"
            checked={searchBy === "ISBN"}
            onChange={(val) => handleSearchBy(val.target.value)}
          />
          ISBN{"   "}
        </label>
        <label>
          <input
            type="radio"
            name="opciones"
            value="author"
            checked={searchBy === "author"}
            onChange={(val) => handleSearchBy(val.target.value)}
          />
          Autor
          {"   "}
        </label>
        <label>
          <input
            type="radio"
            name="opciones"
            value="title"
            checked={searchBy === "title"}
            onChange={(val) => handleSearchBy(val.target.value)}
          />
          Título
          {"   "}
        </label>
        <br />
        <input
          type="text"
          className="search__input"
          value={query}
          onChange={(val) => setQuery(val.target.value)}
          required
        />
        <button type="submit" className="search__button">
          Buscar
        </button>
      </form>

      {results.length >= 1 && (
        <BookList
          books={results}
          title="Coincidencias encontradas"
          rentedBooks={rentedBooks}
          setRentedBooks={setRentedBooks}
        />
      )}
    </div>
  );
}
