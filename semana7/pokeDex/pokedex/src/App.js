import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const DivContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;
`

const DivPType = styled.div`
display:flex;
align-items: center;
flex-direction: column;
justify-content: center;
`




export default class App extends React.Component {

  state = {
    pokemonsList: [],
    pokemonImage: "",
    pokemonName: [],
    pokemonType: [],
    pokemonStats: [],
    pokemonId: ""
  }

  takePokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150")
    .then((response) => {
      
      this.setState({pokemonsList: response.data.results})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  takePokemonData = (poke) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((response)=> {
      this.setState({
        pokemonImage: response.data.sprites.front_default,
        pokemonName: response.data.forms,
        pokemonType: response.data.types,
        pokemonStats: response.data.stats,
        pokemonId: response.data.id
      })
      console.log(response.data)
    })
    .catch((err => {
      console.log(err)
    }))
  }

  selectPokemon = (event) => {
    const pokemonName = event.target.value
    this.takePokemonData(pokemonName)
    
  }

  componentDidMount() {
    this.takePokemon()
    
  }

  render() {

    
    return (

      <DivContainer>

        <select onChange={this.selectPokemon}>
        <option value={""}></option>
        {this.state.pokemonsList.map((p) => {
          return (
          <option key={p.name} value={p.name}>
          {p.name} 
          </option>
          )
        })}
        </select>

        
      {this.state.pokemonImage && <img alt={"Imagem"} src={this.state.pokemonImage}/>}
       
      <p>Nome do Pokemon: {this.state.pokemonName.map((pokemon) => {
        return (
            <span>{pokemon.name}</span>
        )
      })}</p>
      <DivPType>
      <p>Pokemon Type {this.state.pokemonType.map((pokemon) => {
        return (
          
        <li key={pokemon.type.name}>{pokemon.type.name}</li>
        
        )
      })}</p>
      </DivPType>

      <DivPType>

    <p>Pokemon Stats {this.state.pokemonStats.map((pokemon) => {
      return (
      <li>{pokemon.stat.name}: {pokemon.base_stat}</li>
      )
    })}</p>

</DivPType>
      
       

      </DivContainer>
    )
  }
}