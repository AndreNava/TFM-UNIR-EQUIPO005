import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookList({
  books,
  title,
}) {
  const [sortedBooks, setSortedBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setSortedBooks(sorted);
  }, [books]);

  function handleDetails(book) {
    // Redirige al componente BookDetails pasando el ISBN en la URL
    navigate(`/book/${book.ISBN}`);
  }

  return (
    <div className="featured-books">
      {sortedBooks.length >= 1 && <h2 className="featured-books__title">{title}</h2>}
      <ul className="featured-books__list">
        {sortedBooks.map((book) => (
          <li key={book.ISBN} className="featured-books__item">
            <button
              onClick={() => handleDetails(book)}
              className="featured-books__button"
            >
              <img src={book.image.src} alt={book.image.alt} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
