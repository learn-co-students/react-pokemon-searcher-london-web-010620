import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  };

  // handleChange = (e, { state, value }) => this.setState({ [state]: value });
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleHPChange = event => {
    this.setState({
      hp: event.target.value
    });
  };

  handleHPChange = event => {
    this.setState({
      hp: event.target.value
    });
  };

  handleFUrlChange = event => {
    this.setState({
      frontUrl: event.target.value
    });
  };

  handleBUrlChange = event => {
    this.setState({
      backUrl: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: this.state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
      .catch(error => console.error(error));
    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    });
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <Form.Input
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.handleHPChange}
            />
            <Form.Input
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
              onChange={this.handleFUrlChange}
            />
            <Form.Input
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
              onChange={this.handleBUrlChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
