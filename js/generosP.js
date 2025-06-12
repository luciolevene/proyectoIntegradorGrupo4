let container = document.querySelector('.genero-botonesP')
let GenerosP = ''
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let id = datos.get("id");
  

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
    for(let i = 0 ; i < data.genres.length; i++){
GenerosP += `
            <div class="genero-botonesP">
                <a class="boton-genero" href="./detalles-generos.html?id=${data.genres[i].id}">
                    <h3>${data.genres[i].name }</h3>
                </a>
            </div>
`
}
container.innerHTML = GenerosP
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});

