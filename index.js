const cardPokemons = document.querySelectorAll(".card_pokemon");
const pokemonSelecionado = document.querySelector("#pokemon_selecionado");

//Lógica para selecionar o pokemon quando o usuário clicar no card

for (const cardPokemon of cardPokemons) {
  cardPokemon.addEventListener("click", function () {
    const nomePokemon = this.getAttribute("data-nome");

    if (!this.classList.contains("selecionado")) {
      this.classList.add("selecionado");

      pokemonSelecionado.innerHTML = `O último pokemon selecionado foi o <b>${nomePokemon}</b>`;
    } else {
      this.classList.remove("selecionado");

      const pokemonsSelecionados = document.querySelectorAll(".selecionado");

      if (pokemonsSelecionados.length >= 1) {
        pokemonSelecionado.innerHTML = `Você desmarcou o pokemon <b>${nomePokemon}</b>. Restantes:<b>${pokemonsSelecionados.length}</b>`;
      } else {
        pokemonSelecionado.innerHTML = "Selecione um pokemon";
      }
    }
  });
}
