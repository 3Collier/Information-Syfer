let pokemonRepository = (function () {
  let repository = [
    {name: "Arceaus", height: 3.2, type: ["normal"]},
    {name: "Jigglypuff", height: 0.5, type: ["normal", "fairy"]},
    {name: "Psyduck", height: 0.8, type: ["water"]},
  ];

function add(pokemon) {
    repository.push(pokemon);
  }

function getAll() {
      return repository;
  }

function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  button.addEventListener('click', function (event) {
    showDetails(pokemon);
    })
  }

function showDetails(pokemon) {
    console.log(pokemon)
  }

return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
    };
  })();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
