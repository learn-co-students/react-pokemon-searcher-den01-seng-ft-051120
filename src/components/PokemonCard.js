import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    const changeIsClicked = !this.state.isClicked
    this.setState({ isClicked: changeIsClicked })
  }

  render() {
    const { name, hp, sprites } = this.props
    return (
      <Card>
        <div onClick={this.handleClick} >
          <div className="image">
            <img src={this.state.isClicked ? sprites.back : sprites.front} alt="{}" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
