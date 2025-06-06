let container = document.querySelector('.genero-botonesP')
let GenerosP = ''
let apiKey = "a2ebd75bfce21a517850620a286006ec";

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
    for(let i = 0 ; i < data.genres.length; i++){
GenerosP += `
            <div class="genero-botonesP">
                <a class="boton-genero" href="./detail-genres.html">
                    <h3>${data.genres[i].name}</h3>
                </a>
            </div>
`
}
container.innerHTML = GenerosP
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});


let containerS = document.querySelector('.genero-botonesS')
let GenerosS = ''

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
   console.log(data)
    for(let i = 0 ; i < data.genres.length; i++){
GenerosS += `
            <div class="genero-botonesS"   >
                <a class="boton-generoS" href="./detail-genres.html">
                    <h3>${data.genres[i].name}</h3>
                </a>
            </div>
`
}
containerS.innerHTML = GenerosS
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});

let DetallesGeneros= ''
let Dcontainer= document.querySelector('')

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&with_genres=28`)