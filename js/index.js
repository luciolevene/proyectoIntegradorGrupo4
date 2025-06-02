let apiKey = "a2ebd75bfce21a517850620a286006ec";
let movieId = 550;
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < 5; i++) {
      console.log("Título:", data.results[i].title);
      console.log("Resumen:", data.results[i].overview);
      console.log("Fecha de estreno:", data.results[i].release_date);
      console.log("Puntaje promedio:", data.results[i].vote_average);
    }
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });
