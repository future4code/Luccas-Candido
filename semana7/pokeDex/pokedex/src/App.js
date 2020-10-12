import React from "react";
import styled from "styled-components";
import axios from "axios";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NativeSelect from "@material-ui/core/NativeSelect";

const DivTotal = styled.div`
  display: flex;
  justify-content: center;
`;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 15px solid #d41135;
  border-radius: 5px;
  width: 30%;
`;

const DivPType = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const ListaStyle = styled.li`
  list-style: none;
`;

const ImgPb = styled.img`
  margin-right: 10px;
  padding-top: 10px;
`;

export default class App extends React.Component {
  state = {
    pokemonsList: [],
    pokemonImage: "",
    pokemonName: [],
    pokemonType: [],
    pokemonStats: [],
    pokemonId: "",
  };

  // Pega Pokemon
  takePokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=150")
      .then((response) => {
        this.setState({ pokemonsList: response.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Pega os dados do Pokemon

  takePokemonData = (poke) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
      .then((response) => {
        this.setState({
          pokemonImage: response.data.sprites.front_default,
          pokemonName: response.data.forms,
          pokemonType: response.data.types,
          pokemonStats: response.data.stats,
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Quando seleciona o pokemon executa \/

  selectPokemon = (event) => {
    const pokemonName = event.target.value;
    this.takePokemonData(pokemonName);
  };

  // Montando o select quando renderizado.
  componentDidMount() {
    this.takePokemon();
  }

  render() {
    return (
      <DivTotal>
        <DivContainer>
          {/* Pokedex LOGO */}
          <img
            src={
              "https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
            }
          />

          <NativeSelect onChange={this.selectPokemon}>
            <option value={""}></option>

            {/* MAP pra renderizar os valores no select */}
            {this.state.pokemonsList.map((p) => {
              return (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              );
            })}
          </NativeSelect>

          {/* PB ICON */}
          <ImgPb
            src={"https://img.icons8.com/plasticine/2x/pokeball.png"}
            width={"30"}
          />

          {/* CC pra renderizar imagem só quando o pokemon for selecionado. */}
          {this.state.pokemonImage && (
            <img alt={"Imagem"} src={this.state.pokemonImage} />
          )}

          <p>
            <strong>Pokemon Name:</strong>{" "}
            {/* Map pra retornar o nome do Pokemon */}
            {this.state.pokemonName.map((pokemon) => {
              return <span>{pokemon.name.toUpperCase()}</span>;
            })}
          </p>

          <DivPType>
            <p>
              <strong>Pokemon Type</strong> {/* MAP pra pegar os tipos */}
              {this.state.pokemonType.map((pokemon) => {
                return (
                  <ListaStyle key={pokemon.type.name}>
                    <ArrowForwardIcon /> {pokemon.type.name.toUpperCase()}
                  </ListaStyle>
                );
              })}
            </p>
          </DivPType>

          <DivPType>
            <p>
              <strong>Pokemon Stats</strong>{" "}
              {/* MAP Pra renderizar os stats. */}
              {this.state.pokemonStats.map((pokemon) => {
                return (
                  <ListaStyle>
                    {pokemon.stat.name.toUpperCase()}: {pokemon.base_stat}
                  </ListaStyle>
                );
              })}
            </p>
          </DivPType>
        </DivContainer>
      </DivTotal>
    );
  }
}
