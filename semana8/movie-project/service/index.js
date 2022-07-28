//estan los metodos para poder
/**
 * Obtebner   GET
 * Crear      POST
 * Actualizar PUT
 * Eliminar   DELETE
 */
import { urlMovies, mockAPIUrl } from "./config.js";
/**
 * FUNCION QUE RETORNE LAS 100 PELICULAS
 */
export const getMovies = async () => {
  try {
    const response = await fetch(urlMovies);
    const { entries } = await response.json(); //aqui se esta usando desestruccturacion de objetos en js

    return entries;
  } catch (error) {
    return error;
  }
};
/**
 * Esta funcion va a traer las peliculas de mockapi
 */
export const getMoviesFromMockApi = async () => {
  try {
    const response = await fetch(mockAPIUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
export const storeMovieMockApi = async (movie) => {
  console.log("movie", movie);
  try {
    const object = {
      title: movie.title,
      programType: movie.programType,
      releaseYear: movie.releaseYear,
      imageUrl: movie.images["Poster Art"].url,
    };
    console.log("object", object);
    const response = await fetch(mockAPIUrl, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("Response", response);
    return response;
  } catch (error) {
    return error;
  }
};
