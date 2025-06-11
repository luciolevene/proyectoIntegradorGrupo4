let queryString = location.search;
let queryserie = new URLSearchParams(queryString);
let buscar = queryserie.get("q");
let seleccion = queryserie.get("tipo");
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let info = document.querySelector(".peliculas");
let resultsHTML = "";
let imagenBase = "https://image.tmdb.org/t/p/w500";

if (seleccion == "movie") {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${buscar}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let movies = data.results;
      for (let i = 0; i < movies.length; i++) {
        resultsHTML += `
          <a class="linkdetail" href="./detalles-Pelicula.html?id=${movies[i].id}">
            <div class="peliculas">
              <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="${movies[i].title}">
              <p class="textseccion">
                <span class="negrita">${movies[i].original_title}</span> (${movies[i].release_date})
              </p>
            </div>
          </a>
        `;
      }
      info.innerHTML = resultsHTML;
    })
    .catch(function(error) {
      console.error("Ocurrió un error:", error.message);
    });

} else if (seleccion == "tv") {
  let url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${buscar}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let series = data.results;
      for (let i = 0; i < series.length; i++) {
        resultsHTML += `
          <a class="linkdetail" href="./detalles-Series.html?id=${series[i].id}">
            <div class="peliculas nuevo">
              <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt="${series[i].name}">
              <p class="textseccion">
                <span class="negrita">${series[i].name}</span> (${series[i].first_air_date})
              </p>
            </div>
          </a>
        `;
      }
      info.innerHTML = resultsHTML;
    })
    .catch(function(error) {
      console.error("Ocurrió un error:", error.message);
    });
} else {
  info.innerHTML = "<p>No se especificó correctamente el tipo de búsqueda.</p>";
}
