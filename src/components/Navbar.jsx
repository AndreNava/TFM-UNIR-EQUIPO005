import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__div">
        <img className="navbar__img" src={Logo} />
        <h1 className="navbar__tittle">TFM UNIR EQUIPO 005</h1>
      </div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/peliculas">Películas</Link>
        </li>
        <li className="navbar__item">
          <Link to="/search">Buscar</Link>
        </li>
        <li className="navbar__item">
          <Link to="/rentals">Categorias</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact">Actores</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact">Ayuda</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact">Contacto</Link>
        </li>
        
      </ul>
    </nav>
  );
}
