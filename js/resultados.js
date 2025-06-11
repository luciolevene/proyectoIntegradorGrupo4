let qs = location.search;
let qsto = new URLSearchParams(qs);
let resultadoID = qsto.get("q");
let tipo = qsto.get("tipo");
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let imagenBase = "https://image.tmdb.org/t/p/w500";
let urlBase = "https://api.themoviedb.org/3";
let contenedor = document.querySelector(".peliculas");

// Validamos si los datos existen antes de hacer el fetch
if (resultadoID && tipo) {
  fetch(`${urlBase}/search/${tipo}?api_key=${apiKey}&language=es&query=${resultadoID}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let contenido = "";

      if (data.results && data.results.length > 0) {
        for (let i = 0; i < data.results.length; i++) {
          let titulo = tipo === "movie" ? data.results[i].title : data.results[i].name;
          let fecha = tipo === "movie" ? data.results[i].release_date : data.results[i].first_air_date;
          let detalle = tipo === "movie" ? "detalles-Pelicula.html" : "detalles-Series.html";

          contenido +=
            '<article>' +
            '<a href="' + detalle + '?id=' + data.results[i].id + '">' +
            '<img src="' + imagenBase + data.results[i].poster_path + '" alt="' + titulo + '">' +
            '</a>' +
            '<p>' + titulo + ' (' + fecha + ')</p>' +
            '</article>';
        }
      } else {
        contenido = "<p>No hay resultados disponibles.</p>";
      }

      contenedor.innerHTML = contenido;
    })
    .catch(function (error) {
      console.log("Error en búsqueda:", error);
    });
} else {
  document.querySelector(".peliculas").innerHTML = "<p>Faltan datos para la búsqueda.</p>";
}
