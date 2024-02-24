import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "John",
      contador: "0"
    }
    this.contar = this.contar.bind(this)

  }

  contar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);

  }


  render() {
    return (
      <div>
        <h1> {this.state.nome} </h1>

        <h1> <button onClick={this.contar}>+</button>
             {this.state.contador}
             <button>-</button> 
        </h1>
      </div>
    )

  }
}



export default App