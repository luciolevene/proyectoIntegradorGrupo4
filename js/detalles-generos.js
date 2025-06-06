let DetallesGeneros= ''
let Dcontainer= document.querySelector('.peliculas')
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let id = datos.get("id");
let imagenBase = "https://image.tmdb.org/t/p/w500";

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&with_genres=${id}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
        let peliculas= data.results
    for(let i = 0 ; i < 5; i++){
DetallesGeneros += `
            <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].title}">
            </a>
            <p>${peliculas[i].title} (${peliculas[i].release_date})</p>
          </article>
`
}
Dcontainer.innerHTML = DetallesGeneros
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=es-ES&with_genres=${id}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
        let peliculas= data.results
    for(let i = 0 ; i < 5; i++){
DetallesGeneros += `
            <article>
            <a href="detalles-Pelicula.html?id=${peliculas[i].id}">
              <img src="${imagenBase}${peliculas[i].poster_path}" alt="${peliculas[i].title}">
            </a>
            <p>${peliculas[i].title} (${peliculas[i].release_date})</p>
          </article>
`
}
Dcontainer.innerHTML = DetallesGeneros
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});