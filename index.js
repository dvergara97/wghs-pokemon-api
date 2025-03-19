function fetchPokemon() {
  let input = document.querySelector("input");
  // TODO: Implement the fetch request to the Pokemon API
  // Use the value from the input field (document.getElementById('pokemonNumber').value)
  // Create a new pokemon-card element and add it to the pokemonContainer
  // Display the pokemon's name, number, and image
  fetch("https://pokeapi.co/api/v2/pokemon-species/" + input.value, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  }).then(response => response.json())
  .then( json => createPokemonElements(json, input.value));
}

function createPokemonElements(pokemonJson, num) {
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + num + ".png";

    let holder = document.querySelector("#pokemonContainer");

    let card = document.createElement("div");
    card.classList.add("pokemon_card");

    let name = document.createElement("h1");
    name.textContent = pokemonJson.name;
    card.appendChild(name);

    let pokedexNumber = document.createElement("span");
    pokedexNumber.textContent = "#" + pokemonJson.id + " ";
    card.appendChild(pokedexNumber);

    let isLegendary = document.createElement("span");
    isLegendary.textContent = "Is Legendary Pokemon: " + pokemonJson.is_legendary;
    card.appendChild(isLegendary);

    let img = document.createElement("img");
    img.src = imageUrl;

    card.appendChild(img);


    holder.appendChild(card);
}