import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      oneClick: 0,
      oneClick2: 0,
      oneClick3: 0
    }
    this.putClick = this.putClick.bind(this);
    this.putClick2 = this.putClick2.bind(this);
    this.putClick3 = this.putClick3.bind(this);
  }
  putClick = () => {
    this.setState((inicialClick, _props) => ({
      oneClick: inicialClick.oneClick + 1
    }))
  }
  putClick2 = () => {
    this.setState((inicialClick, _props) => ({
      oneClick2: inicialClick.oneClick2 + 1
    }))
  }
  putClick3 = () => {
    this.setState((inicialClick, _props) => ({
      oneClick3: inicialClick.oneClick3 + 1
    }))
  }
  render() {
    return (
      <div>
      <button onClick={this.putClick}>{this.state.oneClick}</button>
      <button onClick={this.putClick2}>{this.state.oneClick2}</button>
      <button onClick={this.putClick3}>{this.state.oneClick3}</button>
      </div>
    )
  }
}

export default App;
