    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let id = datos.get("id");
  
    let apiKey = "a2ebd75bfce21a517850620a286006ec";
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es`;
  
    let contenedor = document.querySelector(".detalle");
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let generosHTML = "";
  
        for (let i = 0; i < data.genres.length; i++) {
          generosHTML += data.genres[i].name + " "
            }
         
  
         contenedor.innerHTML = `
          <div class="detalle-container">
            <div class="detalle-imagen">
              <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.name}">
            </div>
            <div class="detalle-info">
              <h2 class="detalle-titulo">${data.name}</h2>
              <p class="detalle-linea">Calificación: ${data.vote_average}</p>
              <p class="detalle-linea">Popularidad: ${data.popularity}</p>
              <p class="detalle-linea">Fecha de estreno: ${data.first_air_date}</p>
              <p class="detalle-linea">Géneros: ${generosHTML}</p>
              <p class="detalle-linea detalle-sinopsis">Sinopsis: ${data.overview}</p>
            </div>
          </div>
        `;
      })
      .catch(function (error) {
        console.log("Error al cargar detalles de la serie:", error);
      });
  
  