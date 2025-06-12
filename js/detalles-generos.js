let DetallesGeneros = '';
let Dcontainer = document.querySelector('.peliculas');
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let id = datos.get("id");
let imagenBase = "https://image.tmdb.org/t/p/w500";
let apiKey = "a2ebd75bfce21a517850620a286006ec";


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&with_genres=${id}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let peliculas = data.results;

    for (let i = 0; i < 5; i++) {
      let pelicula = peliculas[i];
        DetallesGeneros += `
          <article>
            <a href="detalles-Pelicula.html?id=${pelicula.id}">
              <img src="${imagenBase}${pelicula.poster_path}" alt="${pelicula.title}">
            </a>
            <p>${pelicula.title} (${pelicula.release_date})</p>
          </article>
        `;
      
    }

    Dcontainer.innerHTML = DetallesGeneros;
  })
  .catch(function(error) {
    console.log("Error al obtener películas:", error);
  });


fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=es-ES&with_genres=${id}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let series = data.results;

    for (let i = 0; i < 5; i++) {
      let serie = series[i];

      if (serie && serie.name && serie.poster_path) {
        DetallesGeneros += `
          <article>
            <a href="detalles-Series.html?id=${serie.id}">
              <img src="${imagenBase}${serie.poster_path}" alt="${serie.name}">
            </a>
            <p>${serie.name} (${serie.first_air_date})</p>
          </article>
        `;
      }
    }

    Dcontainer.innerHTML = DetallesGeneros;
  })
  .catch(function(error) {
    console.log("Error al obtener series:", error);
  });
