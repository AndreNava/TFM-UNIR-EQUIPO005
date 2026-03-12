import { Routes, Route } from "react-router-dom";

//simport Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

import Peliculas from "./components/Peliculas";
import PeliculasDetails from "./components/PeliculasDetails";
import { PELICULASDATA } from "./peliculasData";
import Search from "./components/SearchPeliculas";
import Categorias from "./components/Categorias";

const App = () => {

  return (
    <div className="app">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/peliculas"
          element={<Peliculas movies={PELICULASDATA} />}
        />

        <Route
          path="/movie/:id"
          element={<PeliculasDetails movies={PELICULASDATA} />}
        />

        <Route
          path="/categorias"
          element={<Categorias movies={PELICULASDATA} />}
        />

        <Route path="/search" element={<Search />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;