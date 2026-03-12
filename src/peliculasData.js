const API_KEY = import.meta.env.VITE_API_KEY;

async function obtenerPelicula() {
  let dataResponse = [];
  for(let i=1; i<4; i++){ //Cambiar el limite para tener mas peliculas
    const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=movie&page=${i}`;
    try {

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("Error en la petición");
        }

        const data = await response.json();
        dataResponse.push(...data.Search)
        

    } catch (error) {
        console.error("Error:", error);
    }
  }
  return dataResponse

}

export const PELICULASDATA = await obtenerPelicula();