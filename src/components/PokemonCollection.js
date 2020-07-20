import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createCards = () => {
    return this.props.pokemon.map(pokemon => {
      return <PokemonCard key={pokemon.id} {...pokemon} />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
