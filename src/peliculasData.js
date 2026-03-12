const API_KEY = import.meta.env.VITE_API_KEY;

function obtenerPelicula() {
  let dataResponse = [];
  let promises = [];

  for (let i = 1; i < 4; i++) { // Cambiar el limite para tener mas peliculas
    const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=movie&page=${i}`;

    const request = fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.json();
      })
      .then(data => {
        dataResponse.push(...data.Search);
      })
      .catch(error => {
        console.error("Error:", error);
      });

    promises.push(request);
  }

  return Promise.all(promises).then(() => dataResponse);
}

let PELICULASDATA = [];

obtenerPelicula().then(data => {
  PELICULASDATA = data;
  console.log(PELICULASDATA)
});

export { PELICULASDATA };
