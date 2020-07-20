import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: []
  }

  componentDidMount() {
    this.pokemonFetch();
  }

  pokemonFetch = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemon: json,
          filteredPokemon: json
        })
      })
  }

  searchBarChange = (e) => {
    this.setState({
      filteredPokemon: this.state.pokemon.filter(pokemon => pokemon.name.includes(e.target.value))
    })
  }

  addNewPokemon = (newPokemon) => {
    this.setState({
      pokemons: [...this.state.pokemon, newPokemon],
      filteredPokemon: [...this.state.filteredPokemon, newPokemon]
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={(e) => this.searchBarChange(e)}/>
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
      </Container>
    )
  }
} 

export default PokemonPage
