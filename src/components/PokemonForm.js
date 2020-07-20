import React from 'react'
import { Form } from 'semantic-ui-react'

const initialSate= {
  name: '',
  hp: '',
  sprites:{
    front:'',
    back:''
  }
}

class PokemonForm extends React.Component {
  
  state = initialSate

  onChange = (event) =>{
    if( event.target.name === 'front'|| event.target.name === 'back'){
      this.setState({
        sprites:{
          ...this.state.sprites,
          [event.target.name]:event.target.value
        }
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addPokemon(this.state)
    this.setState(initialSate)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => {
            console.log("submitting form...")
            this.onSubmit(event)
            }}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.onChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.onChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
