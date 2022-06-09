import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      estadoInicial: '',
    }
    this.refrash = this.refrash.bind(this);

  }
  refrash = (event) => this.setState( { estadoInicial: event.target.value })
  render() {
    return(
      <div>
       <form>
         <label>
           Do que vc se alimenta?
           <select name='Top?' />
         </label>
         <label>
           Quer conhecer o Ceará?
           <input name='Tu vem?' type='checkbox' />
         </label>
         <label>
           Quantos verões?
           <input name='Idade' type = 'number' />
         </label>
         <label>
           Qual estado dessa aplicação?
           <textarea name='Qual Estado?' value={ this.state.estadoInicial } onChange={ this.refrash }/>
         </label>
       </form>
      </div>
    )
  }
}

export default App;
