import DonQuijoteDeLaMancha from "./assets/1-Don_Quijote_de_la_Mancha.png";
import HistoriaDeDosCiudades from "./assets/2-Historia_de_dos_ciudades.png";
import ElSenorDeLosAnillos from "./assets/3-El_senor_de_los_anillos.png";
import ElPrincipito from "./assets/4-El_principito.png";
import ElHobbit from "./assets/5-El_hobbit.png";
import SuenoEnElPabellonRojo from "./assets/6-Sueno_en_el_pabellon_rojo.png";
import AliciaEnElPaisDeLasMaravillas from "./assets/7-Alicia_en_el_pais_de_las_maravillas.png";
import TripleRepresentatividad from "./assets/8-Triple_representatividad.png";

import YNoQuedoNinguno from "./assets/9-Y_no_quedo_ninguno.png";
import ElLeonLaBrujaYELArmario from "./assets/10-El_leon_la_bruja_y_el_armario.png";
import Ella from "./assets/11-Ella.png";
import CodigoDavinci from "./assets/12-Codigo_davinci.png";
import ElGuardian from "./assets/13-El_guardian.png";
import ElAlquimista from "./assets/14-El_alquimista.png";
import CienAños from "./assets/15-100años.png";
import Heidi from "./assets/16-Heidi.png";

export const BOOKSDATA = [
  {
    ISBN: "978-607-580-019-6",
    title: "Don Quijote de la Mancha",
    author: " Miguel de Cervantes",
    description: "Don Quijote de la Mancha​ es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal. En 1615 apareció su continuación con el título de Segunda parte del ingenioso caballero don Quijote de la Mancha. El Quijote de 1605 se publicó dividido en cuatro partes; pero al aparecer el Quijote de 1615 en calidad de Segunda parte de la obra, quedó revocada de hecho la partición en cuatro secciones del volumen publicado diez años antes por Cervantes.",
    year: 1605,
    image: {
      src: DonQuijoteDeLaMancha,
      alt: "Don Quijote portada",
    },
    rentPriceDay: 5,
  },
  {
    ISBN: "978-607-457-622-1",
    title: "Historia de dos ciudades",
    author: "Charles Dickens",
    description: "Historia de dos ciudades (en inglés: A Tale of Two Cities) es una novela del escritor británico Charles Dickens. Esta novela es particularmente distinta a las demás que escribió, las cuales se basan en su mayoría en historias protagonizadas por niños o adolescentes y muestran una intención de reprimenda o denuncia de la sociedad británica de la época. En esta novela histórica se narra la vida en el siglo XVIII, en la época de la Revolución francesa.",
    year: 1859,
    image: {
      src: HistoriaDeDosCiudades,
      alt: "Historia de dos portada",
    },
    rentPriceDay: 5,
  },
  {
    ISBN: "978-607-39-1223-5",
    title: "El señor de los anillos",
    author: "J. R. R. Tolkien",
    description: "El Señor de los Anillos (título original en inglés: The Lord of the Rings) es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien. Su historia se desarrolla en la Tercera Edad del Sol de la Tierra Media, un lugar ficticio poblado por hombres y otras razas antropomorfas como los hobbits, los elfos o los enanos, así como por muchas otras criaturas reales y fantásticas. La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el Señor oscuro Sauron.",
    year: 1954,
    image: {
      src: ElSenorDeLosAnillos,
      alt: "El Señor de los Anillos portada",
    },
    rentPriceDay: 5,
  },
  {
    ISBN: "978-607-26791-0-8",
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    description: "El principito es un cuento poético que viene acompañado de ilustraciones hechas con acuarelas por el mismo Saint-Exupéry. ​ En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración.",
    year: 1943,
    image: {
      src: ElPrincipito,
      alt: "El principito portada",
    },
    rentPriceDay: 5,
  },
  {
    ISBN: "978-607-39-0552-7",
    title: "El hobbit",
    author: "J. R. R. Tolkien",
    description: "El hobbit (título original en inglés: The Hobbit, or There and Back Again, usualmente abreviado como The Hobbit) es una novela fantástica del filólogo y escritor británico J. R. R. Tolkien. Fue escrita por partes desde finales de los años 1920 hasta principios de los años 1930 y, en un principio, tan sólo tenía el objetivo de divertir a los hijos pequeños de Tolkien. No obstante, el manuscrito de la obra aún sin acabar fue prestado por el escritor a varias personas y finalmente acabó en manos de la editorial George Allen & Unwin. Dispuestos a publicarla, los editores pidieron a Tolkien que finalizara la obra y El hobbit fue publicada el 21 de septiembre de 1937 en el Reino Unido.",
    year: 1937,
    image: {
      src: ElHobbit,
      alt: " El hobbit portada",
    },
    rentPriceDay: 4,
  },
  {
    ISBN: "978-841-85-2681-7",
    title: "Sueño en el pabellón rojo ",
    author: "Cao Xueqin",
    description: "Sueño en el pabellón rojo (紅樓夢, Hóng lóu mèng), es una obra escrita a mediados del siglo XVIII por Cao Xueqin (en chino: 曹雪芹) durante el reinado de la Dinastía Qing. Es considerada una de las obras maestras de la literatura de China y es una de las cuatro novelas clásicas chinas, y es generalmente reconocida como la cúspide de la narrativa china. La obra ha dado lugar al campo de la rojología.",
    year: 1791,
    image: {
      src: SuenoEnElPabellonRojo,
      alt: "Sueño en el pabellón rojo portada",
    },
    rentPriceDay: 4,
  },
  {
    ISBN: "978-607-457-394-7",
    title: "Las aventuras de Alicia en el país de las maravillas",
    author: "Lewis Carroll",
    description: "Las aventuras de Alicia en el país de las maravillas, comúnmente abreviado como Alicia en el país de las maravillas, es una novela de fantasía escrita por el matemático, lógico, fotógrafo y escritor británico Charles Lutwidge Dodgson, bajo el seudónimo de Lewis Carroll, publicada en 1865. La historia cuenta cómo una niña llamada Alicia cae por un agujero, encontrándose en un mundo peculiar, poblado por humanos y criaturas antropomórficas. El libro juega con la lógica, dando a la novela gran popularidad tanto en niños como en adultos.",
    year: 1865,
    image: {
      src: AliciaEnElPaisDeLasMaravillas,
      alt: "Las aventuras de Alicia en el país de las maravillas portada",
    },
    rentPriceDay: 4,
  },
  {
    ISBN: "978-0-313-35731-2",
    title: "Triple representatividad",
    author: "Jiang Zemin",
    description: "La triple representatividad (chino simplificado: 三个代表, chino tradicional: 三個代表, pinyin: sānge dàibiǎo) es el nombre que recibe la teoría política desarrollada por el quinto Secretario General del Partido Comunista de China y Presidente de la República Popular China Jiang Zemin. La teoría explica cuál es el papel del Partido en la sociedad china actual y en el proceso de modernización del Estado. Aunque esta teoría ha sido muy criticada por su supuesto lenguaje vago y general, es la base ideológica que ha permitido la incorporación al Partido Comunista de China de muchos empresarios en los últimos años, y representa una ruptura con la ideología tradicional del Partido, al abandonar la idea de la lucha de clases.",
    year: 2000,
    image: {
      src: TripleRepresentatividad,
      alt: "Don Quijote Portada",
    },
    rentPriceDay: 4,
  },
  {
    ISBN: "978-607-39-0096-6",
    title: "Y no quedó ninguno",
    author: "Agatha Christie",
    description: "Diez negritos, o eventualmente, Y no quedó ninguno, ​ cuyo título original en inglés es Ten little niggers, es una novela policíaca de la escritora británica Agatha Christie, publicada originalmente en Reino Unido por Collins Crime Club el 6 de noviembre de 1939. El título, que hace referencia a una canción infantil, ​ fue cambiado a And Then There Were None en la primera edición de Estados Unidos, y el título de la canción de la novela fue cambiado a Ten Little Indians. ​ La novela cuenta la historia de diez personas implicadas en la muerte de otras personas en el pasado y que lograron escapar de la justicia, que son invitadas a pasar un fin de semana en una isla.",
    year: 1985,
    image: {
      src: YNoQuedoNinguno,
      alt: " Y no quedó ninguno portada",
    },
    rentPriceDay: 3,
  },
  {
    ISBN: "978-607-07-7372-3",
    title: "El león, la bruja y el armario",
    author: "C. S. Lewis",
    description: "El león, la bruja y el armario (en inglés The Lion, the Witch and the Wardrobe) es una novela fantástica infantil publicada por C. S. Lewis en 1950. Es el libro más conocido de la serie de siete libros llamada Las Crónicas de Narnia. Aunque en orden de publicación fue el primer libro de la serie escrito por el autor, es en realidad el segundo según la cronología interna, tras El sobrino del mago. La trama transcurre durante la Segunda Guerra Mundial. Para protegerlos de los bombardeos, cuatro hermanos: Peter, Susan, Edmund y Lucy Pevensie son llevados a la casa rural del profesor Digory Kirke. Tras su llegada a la casa, los hermanos deciden explorar la enorme y prometedora vivienda en busca de algo interesante, para así poder satisfacer su curiosidad infantil. La más joven de los cuatro (Lucy) se queda retrasada en una habitación y entra en un profundo armario (ropero) lleno de abrigos suaves en interminables filas.",
    year: 1950,
    image: {
      src: ElLeonLaBrujaYELArmario,
      alt: "El león, la bruja y el armario portada",
    },
    rentPriceDay: 3,
  },
  {
    ISBN: "978-607-39-2573-0",
    title: "Ella",
    author: "Henry Rider Haggard",
    description: "Ella (subtitulada Historia de aventuras, en inglés She) es la segunda novela de H. Rider Haggard, e inicia una tetralogía cuya protagonista principal es Ayesha, «la que debe ser obedecida». Según una encuesta contemporánea, fue considerada por el público la mejor novela fantástica del siglo XIX.",
    year: 1902,
    image: {
      src: Ella,
      alt: "El Señor de los Anillos portada",
    },
    rentPriceDay: 3,
  },
  {
    ISBN: "978-607-07-4494-5",
    title: "El código Da Vinci",
    author: "Dan Brown",
    description: "El código Da Vinci es una novela de misterio escrita por Dan Brown y publicada por primera vez por Random House en 2003 (ISBN 0-385-50420-9). Se ha convertido en un superventas mundial, con más de 80 millones de ejemplares vendidos y traducido a 44 idiomas. Al combinar los géneros de suspenso detectivesco y esoterismo Nueva Era, con una teoría de conspiración relativa al Santo Grial y al papel de María Magdalena en el cristianismo, la novela espoleó el difundido interés (sobre todo en los Estados Unidos de América) por ciertas teorías de complots «urdidos en la sombra por poderes ocultos», un fenómeno definido por Brown como el «auge conspiracionista».",
    year: 2003,
    image: {
      src: CodigoDavinci,
      alt: "El código Da Vinci portada",
    },
    rentPriceDay: 3,
  },
  {
    ISBN: "978-607-21-0567-6",
    title: "El guardián entre el centeno",
    author: "J. D. Salinger",
    description: "El guardián entre el centeno, El guardián en el trigal o El cazador oculto (en inglés The Catcher in the Rye) ​ es una novela del escritor estadounidense J. D. Salinger. Al publicarse en 1951 (aunque Salinger ya lo había presentado en forma de serie durante los años 1945-1946), en los Estados Unidos, la novela provocó numerosas controversias por su lenguaje provocador y por retratar sin tapujos la sexualidad y la ansiedad adolescente.",
    year: 1951,
    image: {
      src: ElGuardian,
      alt: " El guardián entre el centeno portada",
    },
    rentPriceDay: 2,
  },
  {
    ISBN: "978-607-38-4950-0",
    title: "El alquimista",
    author: "Paulo Coelho",
    description: "El alquimista (O Alquimista, 1988) es un libro escrito por el brasileño Paulo Coelho que ha sido traducido a más de 63 lenguas y publicado en 150 países, y que ha vendido 65 millones de copias en todo el mundo (2012). ​ El libro trata sobre los sueños y los medios que utilizamos para alcanzarlos, sobre el azar en nuestra vida y las señales que se presentan a lo largo de esta.",
    year: 1988,
    image: {
      src: ElAlquimista,
      alt: "El alquimista portada",
    },
    rentPriceDay: 2,
  },
  {
    ISBN: "978-164-47-3472-8",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    description: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo. En medio, una larga docena de personajes dejarán su impronta a las generaciones venideras, que tendrán que lidiar con un mundo tan complejo como sencillo.",
    year: 1967,
    image: {
      src: CienAños,
      alt: "Cien años de soledad",
    },
    rentPriceDay: 2,
  },
  {
    ISBN: "978-607-14-4375-5",
    title: "Heidi",
    author: "Johanna Spyri ",
    description: "Heidi (originalmente Heidis Lehr- und Wanderjahre) es el nombre de un libro infantil de 1880 de la escritora suiza Johanna Spyri. Recibe el nombre del personaje protagonista de la historia, Heidi, una pequeña niña que vive en los Alpes suizos cercanos a la frontera con Austria. Heidi le ha dado fama internacional a Spyri, y es uno de los libros más leídos de la literatura suiza en el mundo. Es un libro lleno de inocencia, donde se resaltan los valores humanos y el amor hacia la naturaleza.",
    year: 1888,
    image: {
      src: Heidi,
      alt: "Heidi portada",
    },
    rentPriceDay: 2,
  },

];
