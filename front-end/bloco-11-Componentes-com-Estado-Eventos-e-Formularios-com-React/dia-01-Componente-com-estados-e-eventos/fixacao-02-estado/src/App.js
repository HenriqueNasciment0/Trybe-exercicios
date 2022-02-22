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
    //versão a baixo também funciona e fica mais clean para fazer o acumulo de valor usando o valor inicial
    this.setState(({ oneClick3 }) => ({
      oneClick3: oneClick3 + 1
    }))
  }

  corPar(number) {
   return number % 2 === 0 ? 'green' : 'whitcde';
  }
  render() {
    const { oneClick, oneClick2, oneClick3 } = this.state;
    return (
      <div>
      <button onClick={ this.putClick } style={{ backgroundColor: this.corPar(oneClick) }}>{ oneClick }</button>
      <button onClick={ this.putClick2 } style={{ backgroundColor: this.corPar(oneClick2) }}>{ oneClick2 }</button>
      <button onClick={ this.putClick3 } style={{ backgroundColor: this.corPar(oneClick3) }}>{ oneClick3 }</button>
      </div>
    );
  }
}

export default App;
