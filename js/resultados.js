let qs = location.search;
let qsto = new URLSearchParams(qs);
let resultadoID = qsto.get("query");
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let imagenBase = "https://image.tmdb.org/t/p/w500";
let contenedorPeliculas = document.querySelectorAll(".peliculasBuscadas");
let tipo = qsto.get({tipo}); 
window.onload = carga;
function carga(){
    document.querySelector(".gif").style.display="none";
}
fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&query=${resultadoID}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let peliculas = data.results.slice(0, 5);
      let contenido = "";
      if(data.results.length <0){
        for (let i = 0; i < peliculas.length; i++) {
        contenido += `
          <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].title}">
            </a>
            <p>${peliculas[i].title} (${peliculas[i].release_date.slice(0, 4)})</p>
          </article>
        `;
      }
      }else{contenido = "<p> No hay resultados disponibles</p>"}
      
      contenedorPeliculas.innerHTML = contenido;
    })
    .catch(function (error) {
      console.log("Error en películas populares:", error);
    });
