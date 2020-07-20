import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayPokemon = () => {
    return this.props.pokemon.map(monster => {
      return <PokemonCard key={monster.id} monster={monster}/>})
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.displayPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
