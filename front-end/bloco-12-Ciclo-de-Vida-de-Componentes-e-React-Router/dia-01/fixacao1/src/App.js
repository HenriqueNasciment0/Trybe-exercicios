// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div>
          {characters.map((character) => { // ou colocar {} dentro do parametro e colocar name, image e gender dentro, e chamar direto sem character em baixo
            return (
              <div key={character.name}>
                <h3>{character.name} </h3>
                <img src={character.image} alt={character.name} />
                <h4>{character.gender}</h4>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default App;