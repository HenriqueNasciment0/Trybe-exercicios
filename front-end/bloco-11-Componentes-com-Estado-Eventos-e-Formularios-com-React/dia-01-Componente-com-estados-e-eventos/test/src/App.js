import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.test = this.test.bind(this);
  }
  
  test = () => {
    console.log(this);
    console.log('clicoouu');
  }
  render() {
    return (      
      <button onClick={this.test}>bora</button>
      )
  }
}

export default App;
