import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function PokeCard(props) {
  const [pokemonDois, setPokemonDois] = useState({});

  // método que roda após a montagem do componente

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemonDois(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemonDois.name}</p>
      <p>{pokemonDois.weight} Kg</p>
      {pokemonDois.types && <p>{pokemonDois.types[0].type.name}</p>}
      {pokemonDois.sprites && (
        <img src={pokemonDois.sprites.front_default} alt={pokemonDois.name} />
      )}
    </div>
  );
}

export default PokeCard;
