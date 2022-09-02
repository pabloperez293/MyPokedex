// function updateUIPokedex(poke) {
//     document.querySelector("#pokemon").textContent = poke.name
//     document.querySelector("#imagen").setAttribute("src", poke.sprites.front_default)
// }

// // // Ponemos la funcion async , lo llamamos con id esta funcion
// async function getPokemon(id) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     const data = await res.json()
//     // con return va para la fun getPokemon
//     return data
// }

// async function init() {
//     const firtPokemon = await getPokemon(4)
//     updateUIPokedex(firtPokemon)
// }

// let search = document.querySelector("#search")
// search.addEventListener("change", async() =>{
//     // Busca con id o name .value
//     const pokemon = await getPokemon(search.value)
//     updateUIPokedex(pokemon)
// })


// init()

// Muestra la lista de obtenida


const pokeContainer =  document.querySelector(".pokeContainer")
// llamamos a los pokemons
function fetchPoke(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => 
        createPokemon(data)
    );
}
// contamos los pokemons
function fetchPokes(num) {
    for (let i = 1 ; i <= num; i++) {
        fetchPoke(i);
    }
}
// Para que esten en pantalla mostrandolos 
function createPokemon(pokemon) {
    const card = document.createElement("div")
    card.classList.add("poke-block")

    const spriteContainer = document.createElement("div")
    spriteContainer.classList.add("img-container")

    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite)

    const num = document.createElement("p")
    num.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

    const name = document.createElement("p")
    name.classList.add("name")
    name.textContent = pokemon.name

    card.appendChild(spriteContainer)
    card.appendChild(num)
    card.appendChild(name)

    pokeContainer.appendChild(card)

}
// Con esto se puede ver los detalles de la api.
fetchPokes(15)

