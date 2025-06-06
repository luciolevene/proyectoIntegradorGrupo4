
  let apiKey = "a2ebd75bfce21a517850620a286006ec";
  let urlBase = "https://api.themoviedb.org/3";
  let imagenBase = "https://image.tmdb.org/t/p/w500";

  let contenedorPeliculas = document.querySelectorAll(".peliculas")[0];
  let urlPeliculas = `${urlBase}/movie/popular?api_key=${apiKey}`;

  fetch(urlPeliculas)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let peliculas = data.results;
      let contenido = "";
      for (let i = 0; i < 5; i++) {
        contenido += `
          <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].title}">
            </a>
            <p>${peliculas[i].title} (${peliculas[i].release_date})</p>
          </article>
        `;
      }
      contenedorPeliculas.innerHTML = contenido;
    })
    .catch(function (error) {
      console.log("Error en películas populares:", error);
    });

  let contenedorSeries = document.querySelectorAll(".peliculas")[1];
  let urlSeriesCrimen = `${urlBase}/discover/tv?api_key=${apiKey}`;

  fetch(urlSeriesCrimen)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let series = data.results;
      let contenido = "";
      for (let i = 0; i < 5; i++) {
        contenido += `
          <article>
            <a href="detalles-Series.html?id=${series[i].id}">
              <img src="${imagenBase}${series[i].poster_path}" alt="${series[i].name}">
            </a>
            <p>${series[i].name} (${series[i].first_air_date})</p>
          </article>
        `;
      }
      contenedorSeries.innerHTML = contenido;
    })
    .catch(function (error) {
      console.log("Error en series de crimen:", error);
    });


  let contenedorTop = document.querySelectorAll(".peliculas")[2];
  let urlPeliculasTop = `${urlBase}/movie/top_rated?api_key=${apiKey}`;

  fetch(urlPeliculasTop)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataPeliculas) {
      let peliculas = dataPeliculas.results;
      let contenido = "";

      for (let i = 0; i < 3; i++) {
        contenido += `
          <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].title}">
            </a>
            <p>${peliculas[i].title} (${peliculas[i].release_date})</p>
          </article>
        `;
      }

    
      let urlSeriesTop = `${urlBase}/tv/top_rated?api_key=${apiKey}`;

      fetch(urlSeriesTop)
        .then(function (response) {
          return response.json();
        })
        .then(function (dataSeries) {
          let series = dataSeries.results;

          for (let i = 0; i < 2; i++) {
            contenido += `
              <article>
                <a href="detalles-Series.html?id=${series[i].id}">
                  <img src="${imagenBase}${series[i].poster_path}" alt="${series[i].name}">
                </a>
                <p>${series[i].name} (${series[i].first_air_date})</p>
              </article>
            `;
          }

          contenedorTop.innerHTML = contenido;
        })
        .catch(function (error) {
          console.log("Error en series top:", error);
        });
    })
    .catch(function (error) {
      console.log("Error en películas top:", error);
    });

