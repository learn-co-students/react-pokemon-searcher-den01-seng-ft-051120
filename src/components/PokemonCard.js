import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state= {
    isClicked: false
  }

  handleClick= () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

 changeImg = () =>{
   return this.state.isClicked ? `${this.props.monster.sprites.back}` : `${this.props.monster.sprites.front}`
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img 
            onClick={this.handleClick}
            src={this.changeImg()}
            alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.monster.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.monster.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
