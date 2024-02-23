import React, { Component } from "react";

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      nome: "john",
      contador: 0
    }
  }

  aumentar ( ) {
    //Metodo que atualiza o valor da state.
    this.setState( {contador: 1} )
  }



  render() {
    return (
      <div>

        <h1> <button onClick={this.aumentar} >+</button> 
          {this.state.contador} 
        <button>-</button> </h1>

      </div>
    )
  }
}



export default App