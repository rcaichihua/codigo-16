import {
  getMovies,
  storeMovieMockApi,
  getMoviesFromMockApi,
} from "./service/index.js";
//console.log(getMovies);

const btnGetMovies = document.querySelector("#btn-get-movies");
const containerMovies = document.querySelector("#container-movies");
const btnSaveApi = document.querySelector("#btn-save-api");
const btnGetMoviesMockApi = document.querySelector("#btn-get-movies-mock-api");
let moviesWithImage = [];

btnGetMovies.onclick = async function () {
  const movies = await getMovies();
  containerMovies.innerHTML = "";
  movies
    .sort(() => 0.5 - Math.random())
    .forEach(async (movie) => {
      //dentro del forEach no se hereda del async por ende hay que hacer
      //que el foreach es async
      const imageUrl = movie.images["Poster Art"].url;

      const response = await fetch(imageUrl);

      if (response.ok) {
        //si la peticion de la imagen es OK vamos a renderizar la
        //pagina(renmderizar que la pagina se genere)
        renderMovie(movie);
      }
      //console.log(response);
    });
};

btnSaveApi.onclick = function () {
  console.log(moviesWithImage);
  moviesWithImage.forEach(async (movie) => {
    await storeMovieMockApi(movie);
  });
};

btnGetMoviesMockApi.onclick = async function () {
  const movies = await getMoviesFromMockApi();
  console.log(movies);
};
function renderMovie(movie) {
  // va a contar la cantidad elmentos renderizado en nuestro html
  const movies = document.querySelectorAll("#container-movies .col");

  if (movies.length >= 20) return;

  moviesWithImage.push(movie);

  containerMovies.innerHTML += `
    <div class="col">
      <div class="card my-3">
        <div class="into-photo">
          <span class="badge text-bg-${
            movie.programType === "series" ? "success" : "warning"
          }">${movie.programType}</span>
          <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <div class="card-title">${movie.title}</div>
        </div>
      </div>
    </div>
  `;
}
