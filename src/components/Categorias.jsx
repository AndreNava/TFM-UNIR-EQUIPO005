import BookList from "./BookList.jsx";

export default function Categorias({ books }) {
  return (
    <div className="books">
      <h1 className="books__title">Películas.</h1>
      <BookList
        books={books}
        title="Libros disponibles"
      />
    </div>
  );
}
