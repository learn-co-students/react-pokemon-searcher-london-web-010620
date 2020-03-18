import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import SortAndFilterOptions from "./SortAndFilterOptions";

class PokemonIndex extends React.Component {
  state = {
    pokemons: [],
    searchTerm: "",
    sortType: "DEFAULT"
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons: pokemons }))
      .catch(e => console.error(e));
  }

  renderPokemons() {
    let pokemonsToRender = this.state.pokemons;

    if (this.state.searchTerm) {
      pokemonsToRender = pokemonsToRender.filter(pokemon =>
        pokemon.name
          .toLocaleLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase())
      );
    }
    return pokemonsToRender;
  }

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] });
  };

  setSortType = sortType => {
    this.setState({
      sortType
    });
  };

  render() {
    const sortedPokemonsToRender = this.renderPokemons().sort((A, B) => {
      if (this.state.sortType === "DEFAULT") {
        return 0;
      } else if (this.state.sortType === "ABC") {
        return A.name.localeCompare(B.name);
      } else if (this.state.sortType === "HP") {
        return (
          B.stats.find(s => s.name === "hp").value -
          A.stats.find(s => s.name === "hp").value
        );
      }
    });

    return (
      <Container>
        <h1>Pokemon Searcher </h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleSearchTermChange} />
        <br />
        <SortAndFilterOptions setSortType={this.setSortType} />
        <PokemonCollection pokemons={sortedPokemonsToRender} />
      </Container>
    );
  }
}

export default PokemonIndex;
