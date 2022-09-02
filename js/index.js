const pokeContainer =  document.querySelector(".pokeContainer")

// llamamos a los pokemons
function fetchPoke(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => 
        createPokemon(data, id)
    );
}
// contamos los pokemons
function fetchPokes(num) {
    for (let i = 1 ; i <= num; i++) {
        fetchPoke(i);
    }
}
// Para que esten en pantalla mostrandolos 
function createPokemon(pokemon, id) {
    const card = document.createElement("div")
    card.classList.add("poke-block")
    card.id = id;

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
    card.onclick = () => eliminarPokemon(id);
    pokeContainer.appendChild(card);

}
// Con esto se puede ver los detalles de la api.
fetchPokes(20)

// Eliminacion figiendo una llamada que dura 1 seg
function deletePoke(id){
  return new Promise(resolve => setTimeout(() => resolve(true), 1000))
} 
function eliminarPokemon(id){
  deletePoke(id).then( res => {
    console.log(res)
    if(res){
      document.getElementById(id).remove();
    }
  })
}