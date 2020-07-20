import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    pokemonSearch: ''
  }

  componentDidMount(){
    this.getPokemon()
  }

  getPokemon = () =>{
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(result => this.setState({pokemon: result}))
  }

  onChange = (event) => {
    this.setState({ pokemonSearch: event.target.value})
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
    fetch('http://localhost:3000/pokemon', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(pokemon)
    })
  }

  render() {

    const filteredPokemon = this.state.pokemon.filter(monster => monster.name.includes(this.state.pokemonSearch))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.onChange}/>
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
