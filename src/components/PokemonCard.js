import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    showDeets: false
  };

  toggleShowDeets = () => {
    this.setState({
      showDeets: !this.state.showDeets
    });
  };

  render() {
    return (
      <Card>
        <div onClick={this.toggleShowDeets}>
          <div className="image">
            <img
              src={
                this.state.showDeets
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
