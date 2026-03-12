import AboutUs1 from "../assets/About-Us-1.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container--intro">
        <h1 className="home__title">Bienvenido a Películas Online</h1>
        <div className="home__description">
          <h2>Tu web app de confianza de catalogo de películas y recomendaciones.</h2>
        </div>
      </div>

      <div className="home__container home__container--grid">
        <div className="home__row">
          <div className="home__col">
            <h3>Misión</h3>
            <p>
              Nuestra misión es ofrecer a los amantes del cine una plataforma integral que facilite el descubrimiento, 
              organización y disfrute de películas de todos los géneros, épocas y culturas. 
              Buscamos crear un catálogo amplio, actualizado y accesible que permita a los usuarios 
              explorar fácilmente nuevas historias, directores y estilos cinematográficos según sus 
              gustos e intereses.
              <br></br>
              A través de tecnología inteligente, análisis de preferencias y sistemas de recomendación personalizados,
              nuestro objetivo es ayudar a cada usuario a encontrar películas que realmente conecten con sus emociones y experiencias. 
              Asimismo, fomentamos una comunidad participativa donde los usuarios puedan compartir opiniones, calificaciones y 
              recomendaciones, enriqueciendo así la experiencia colectiva del descubrimiento cinematográfico.
            </p>
          </div>
          <div className="home__col">
            <h3>Visión</h3>
            <p>
              Nuestra visión es convertirnos en la plataforma líder a nivel nacional e internacional en 
              el descubrimiento, catalogación y recomendación de películas, siendo reconocidos por 
              ofrecer una experiencia personalizada, innovadora y accesible para todo tipo de público. 
              Aspiramos a transformar la forma en que las personas encuentran y disfrutan el cine, 
              facilitando el acceso a una gran diversidad de contenidos cinematográficos.
              <br></br><br></br>
              Buscamos integrar tecnologías avanzadas de análisis de datos y sistemas de 
              recomendación inteligentes que permitan comprender los gustos y preferencias 
              de cada usuario, ofreciendo sugerencias cada vez más precisas y relevantes. 
              De esta manera, pretendemos que cada persona pueda descubrir nuevas películas, 
              directores y géneros que enriquezcan su experiencia cultural y de entretenimiento.
            </p>
          </div>
        </div>
      </div>

      <div className="home__container--intro2">
        <h1 className="home__title2">
          Creemos que cada película tiene el poder de emocionar, inspirar y transportar a 
          nuevas realidades, y queremos acercar esas historias a todas las personas para que 
          puedan descubrir, disfrutar y compartir el mundo del cine.
        </h1>
      </div>

      <div className="home__container home__container--grid">
        <div className="home__row">
          <div className="home__col">
            <h3>¿Por qué elegirnos?</h3>
            <br />
            <ul>
              <li>
                <b>Variedad:</b> Amplio catálogo de películas de diferentes géneros, épocas y países.
              </li>
              <li>
                <b>Recomendaciones:</b> Sugerencias de películas basadas en tus gustos y preferencias.
              </li>
              <li>
                <b>Comodidad:</b> Plataforma fácil de usar para buscar, descubrir y guardar películas desde cualquier dispositivo.
              </li>
              <li>
                <b>Descubrimiento:</b> e ayudamos a encontrar nuevas películas, clásicos y joyas ocultas que quizá no conocías.
              </li>
            </ul>
          </div>
          <div className="home__col">
            <h3>¿Cómo Funciona?</h3>
            <ul>
              <li>
                <b>Explora:</b> Navega por nuestro catálogo desde el menú principal en la opción “Películas”, 
                o utiliza la sección “Buscar” para encontrar películas por título, género, director o año.
              </li>
              <li>
                <b>Selecciona:</b> Haz clic en la película que te interese para ver información detallada como 
                sinopsis, duración, género, calificaciones y recomendaciones relacionadas.
              </li>
              <li>
                <b>Descubre:</b> Revisa las sugerencias personalizadas basadas en tus gustos y en las películas 
                que has visto o guardado.
              </li>
              <li>
                <b>Disfruta:</b> Encuentra tu próxima película y disfruta del mejor entretenimiento.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
