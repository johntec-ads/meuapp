import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "john marcelo",
      contador: 0
    };
    
    this.contar = this.contar.bind(this);

  }

  

  contar () {
    this.state.contador +=

    this.setState( {contador} )
  }

  render() {

    return (
      <div>
        <h1> {this.state.nome} </h1>
        <h1> <button onClick={this.contar} >+</button> {this.state.contador} <button>-</button> </h1>
      </div>
    )
  }
}

export default App;