import BookList from "./BookList.jsx";

export default function Books({ books }) {
  return (
    <div className="books">
      <h1 className="books__title">Descubre y renta tus libros favoritos.</h1>
      <BookList
        books={books}
        title="Libros disponibles"
      />
    </div>
  );
}
