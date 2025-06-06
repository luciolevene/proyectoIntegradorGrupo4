let qs = location.search;
let qsto = new URLSearchParams(qs);
let resultadoID = qsto.get("query");
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let imagenBase = "https://image.tmdb.org/t/p/w500";
let tipo = qsto.get("tipo");


fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&query=${resultadoID}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let peliculas = data.results;
    let contenedorPeliculas = document.querySelector(".peliculas");
      let contenido = "";
      if(data.results.length > 0){
        for (let i = 0; i < 5; i++) {
          if (tipo === "movie") {
        titulo       = peliculas[i].title;            
        fechaInicial = peliculas[i].release_date;     
        } else {
        titulo       = peliculas[i].name;             
        fechaInicial = peliculas[i].first_air_date;  
        }
        contenido += `
          <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].titulo}">
            </a>
            <p>${titulo} (${fechaInicial.slice(0, 4)})</p>
          </article>
        `;
      }
      }else{contenido = "<p> No hay resultados disponibles</p>"}
      
      contenedorPeliculas.innerHTML = contenido;
    })
    .catch(function (error) {
      console.log("Error en películas populares:", error);
  });