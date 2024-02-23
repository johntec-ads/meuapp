
import React, {Component} from "react";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      //estados no formato de objetos
      nome: "John",
      contador: 0
    }
    this.aumentar = this.aumentar.bind(this);
  }

  aumentar () {
    let state = this.state;

    state.contador += 1;

    this.setState(state)
  }


  render() {
    return (
      <div>
        <h1> Contador</h1>
        <h3>
           <button onClick={this.aumentar} >+</button> 
                {this.state.contador} 
            <button>-</button> 
        </h3>
        
      </div>
    )
  }
}

export default App