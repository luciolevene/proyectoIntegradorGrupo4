let apiKey = "a2ebd75bfce21a517850620a286006ec";
let imagenBase = "https://image.tmdb.org/t/p/w500";
let urlBase = "https://api.themoviedb.org/3";

let queryString = location.search;
let datos = new URLSearchParams(queryString);

let tipo = datos.get("tipo"); 
let resultado = document.querySelector(".peliculas");

if (tipo === "pelicula") {
  fetch(`${urlBase}/movie/popular?api_key=${apiKey}&language=es`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let contenido = "";
      for (let i = 0; i < 10; i++) {
        contenido += '<article>' +
          '<a href="detalles-Pelicula.html?id=' + data.results[i].id + '">' +
          '<img src="' + imagenBase + data.results[i].poster_path + '" alt="' + data.results[i].title + '">' +
          '</a>' +
          '<p>' + data.results[i].title + ' (' + data.results[i].release_date + ')</p>' +
          '</article>';
      }
      resultado.innerHTML = contenido;
    });
} else if (tipo === "serie") {
  fetch(`${urlBase}/tv/popular?api_key=${apiKey}&language=es`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let contenido = "";
      for (let i = 0; i < 10; i++) {
        contenido += '<article>' +
          '<a href="detalles-Series.html?id=' + data.results[i].id + '">' +
          '<img src="' + imagenBase + data.results[i].poster_path + '" alt="' + data.results[i].name + '">' +
          '</a>' +
          '<p>' + data.results[i].name + ' (' + data.results[i].first_air_date + ')</p>' +
          '</article>';
      }
      resultado.innerHTML = contenido;
    });
}
