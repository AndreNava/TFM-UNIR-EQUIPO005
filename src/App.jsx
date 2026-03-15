import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

import Peliculas from "./pages/Peliculas";
import PeliculasDetails from "./components/PeliculasDetails";
import Search from "./pages/Search";
import Categorias from "./pages/Categorias";
import AsistenteIA from "./components/AsistenteIA";

import { obtenerPelicula } from "./peliculasData";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    obtenerPelicula().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/peliculas" element={<Peliculas movies={movies} />} />

        <Route
          path="/movie/:id"
          element={<PeliculasDetails movies={movies} />}
        />

        <Route path="/categorias" element={<Categorias movies={movies} />} />

        <Route path="/search" element={<Search movies={movies} />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <AsistenteIA />

      <Footer />
    </div>
  );
};

export default App;
