import AboutUs1 from "../assets/About-Us-1.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container--intro">
        <h1 className="home__title">Bienvenido a Ipsum Libreria Online</h1>
        <div className="home__description">
          <h2>Tu librería de confianza para alquilar tus libros favoritos.</h2>
        </div>
      </div>

      <div className="home__container home__container--grid">
        <div className="home__row">
          <div className="home__col">
            <h3>Misión</h3>
            <p>
              Hacer que la lectura sea accesible para todos, proporcionando una
              plataforma inclusiva que permita a personas de cualquier lugar
              alquilar libros de manera económica, cómoda y sostenible.
              Inspiramos el amor por la lectura ofreciendo una amplia variedad
              de títulos para satisfacer todas las edades, intereses y géneros.
            </p>
          </div>
          <div className="home__col">
            <h3>Visión</h3>
            <p>
              Convertirnos en la librería de alquiler líder a nivel mundial,
              eliminando las barreras económicas y geográficas para el acceso a
              los libros. Soñamos con un futuro donde cada persona pueda
              disfrutar de las historias, conocimientos y experiencias que los
              libros tienen para ofrecer, promoviendo la educación, el
              entretenimiento y el desarrollo personal sin límites.
            </p>
          </div>
        </div>
      </div>

      <div className="home__container--intro2">
        <h1 className="home__title2">
          "Creemos que cada historia tiene el poder de transformar, educar y
          entretener, y queremos poner esas historias al alcance de todos".
        </h1>
      </div>

      <div className="home__container home__container--grid">
        <div className="home__row">
          <div className="home__col">
            <h3>¿Por qué elegirnos?</h3>
            <br />
            <ul>
              <li>
                <b>Variedad:</b> Amplia selección de libros.
              </li>
              <br />
              <li>
                <b>Flexibilidad:</b> Puedes solicitar prorrogas en caso de ser
                necesario para la devolucion del libro.
              </li>
              <br />
              <li>
                <b>Comodidad:</b> Facil de alquilar libros mediante nuestra web.
              </li>
              <br />
              <li>
                <b>Sostenibilidad:</b> Reutilización de libros.
              </li>
              <br />
            </ul>
          </div>
          <div className="home__col">
            <h3>¿Cómo Funciona?</h3>
            <ul>
              <li>
                <b>Explora:</b> Navega por nuestro catálogo desde el menú
                superior en la opción "Libros" o si prefieres buscar tu libro
                por título, ISBN o autor todo esto desde el menu "Buscar".
              </li>
              <li>
                <b>Selecciona:</b> Selecciona el libro dando clic sobre el
                recuadro correspondiente donde podrás ver informacion adicional
                sobre el ejemplar y dale clic en rentar.
              </li>
              <li>
                <b>Alquila:</b> Selecciona la cantidad de días (5, 10 o 15) te
                mostrara el precio de renta por día y el total.
              </li>
              <li>
                <b>Gestiona rentas:</b> Desde el menú superior en la opción
                "Alquilados" podrás solicitar prorrogas siempre y cuando tu
                tiempo de renta sea menor a 30 día
              </li>
              <li>
                <b>Disfruta:</b> Disfruta tu lectura!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
