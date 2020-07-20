import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(this.pokemonToState)
  }

  pokemonToState = (pokemon) => {
    this.setState({
      pokemon: pokemon
    })
  }

  addToState = (pokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  addPokemon = (pokemon) => {
    const newPokemon = {
      name: pokemon.name,
      hp: pokemon.hp,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon)
    }).then(response => response.json())
      .then(this.addToState)
  }

  searchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm })
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
      if (pokemon.name.includes(this.state.searchTerm)) {
        return pokemon
      }
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchChange={this.searchChange} />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
