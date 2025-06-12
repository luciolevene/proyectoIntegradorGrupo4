let queryString = location.search;
let datos = new URLSearchParams(queryString);
let id = datos.get("id");
let apiKey = "a2ebd75bfce21a517850620a286006ec";
let containerS = document.querySelector('.genero-botonesS')
let GenerosS = ''

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
 
    .then(function(data){
    for(let i = 0 ; i < data.genres.length; i++){
GenerosS += `
            <div class="genero-botonesS"   >
                <a class="boton-generoS" href="./detalles-generos.html?id=${data.genres[i].id}">
                    <h3>${data.genres[i].name }</h3>
                </a>
            </div>
`
}
containerS.innerHTML = GenerosS
})
.catch(function (error) {
console.error('Error al obtener los detalles de la película:', error);
});

