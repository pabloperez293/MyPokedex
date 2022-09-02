const pokemon = document.querySelector("#pokemon")

function renderPokemon(image) {
    pokemon.setAttribute("src", image)
}
fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
    .then(res => res.json())
    .then(pokemon => {
        // debugger
        renderPokemon(pokemon.sprites.front_default)
    })
// Con esto traemos el pokemon desde la api