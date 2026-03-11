import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Books from "./components/Books";
import Search from "./components/Search";
import Rentals from "./components/Rentals";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";
import { BOOKSDATA } from "./booksData";
import Contact from "./components/Contact";

const App = () => {
  const [rentedBooks, setRentedBooks] = useState([]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <Books rentedBooks={rentedBooks} setRentedBooks={setRentedBooks} books={BOOKSDATA} />
          }
        />
         <Route path="/book/:isbn" element={<BookDetails rentedBooks={rentedBooks} setRentedBooks={setRentedBooks} books={BOOKSDATA}/>} />
        <Route path="/search" element={<Search rentedBooks={rentedBooks} setRentedBooks={setRentedBooks}/>} />
        <Route
          path="/rentals"
          element={
            <Rentals
              rentedBooks={rentedBooks}
              setRentedBooks={setRentedBooks}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
