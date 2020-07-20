import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleClick = () => {
    if( this.state.front === true ) {
      this.setState({ front: false })
    } else {
      this.setState({ front: true })
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img src={this.state.front === true ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back } alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
