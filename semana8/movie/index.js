const containerMovies = document.querySelector("#container-movies");
function renderCard(movies) {
  containerMovies.innerHTML = "";
  console.log("movie", movies);
  //var rand = getRandomFromMovie(movies, 10);
  //console.log("random 10 movies: ", rand);
  movies.forEach((movie) => {
    //console.log(movie.programType);
    const { title, programType, images } = movie;

    containerMovies.innerHTML += `
        <div class="col">
          <div class="card my-3">
            <div class="into-photo">
              <span class="badge text-bg-${
                programType === "series" ? "success" : "warning"
              }">${programType}
              </span>

              <img src="${fetch(images["Poster Art"].url)
                .then(function (response) {
                  if (response.ok) {
                    response.blob().then(function (miBlob) {
                      var objectURL = URL.createObjectURL(miBlob);
                      return objectURL;
                    });
                  } else {
                    console.log(
                      "Respuesta de red OK pero respuesta HTTP no OK"
                    );
                  }
                })
                .catch(function (error) {
                  console.log(
                    "Hubo un problema con la petición Fetch:" + error.message
                  );
                })}"
                class="card-img-top"
                onerror="this.onerror=null;this.src='https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-hay-icono-de-imagen-disponible-ilustraci%C3%B3n-vectorial-plana.jpg?ver=6'
                " alt=""/>
            </div>
          <div class="card-body">
            <div class="card-title">${title}</div>
              <p class="card-text">
                ${movie.description}
              </p>
            </div>
          </div>
        </div>
    `;
  });
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((respuestita) => respuestita.json())
  .then((datos) => renderCard(datos.entries))
  .catch(function () {
    console.log("Google-  not so OK");
  });

// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el A""PI de pokemon
const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(urlPokemon)
  .then((response) => response.json())
  .then((data) => console.log(data));

function getRandomFromMovie(array, numberOfRandomElementsToExtract = 1) {
  const elements = [];

  function getRandomElement(arr) {
    if (elements.length < numberOfRandomElementsToExtract) {
      const index = Math.floor(Math.random() * arr.length);
      const element = arr.splice(index, 1)[0];

      elements.push(element);

      return getRandomElement(arr);
    } else {
      return elements;
    }
  }

  return getRandomElement([...array]);
}
