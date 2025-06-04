let apiKey = "a2ebd75bfce21a517850620a286006ec";
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let peliHTML= ''


fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results;
    let peliHTML = "";

    for (let i = 0; i < 5; i++) {
      peliHTML += `
        <a class="linkDetail" href="./detalles-Pelicula.html?id=${movies[i].id}">
          <div class="peliculitas">
            <img class="imagenPeliculas" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="${movies[i].title}">
            <div class="textoPeliculas">
              <span class="negrita">${movies[i].title}</span> (${movies[i].release_date.slice(0,4)})
            </div>
          </div>
        </a>
      `;
    }

    let peli = document.querySelector(".peliculas");
    peli.innerHTML = peliHTML;
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });
