import React, {Component} from "react"

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nome: "Isabel"
    }
  }

  render () {
  return (
    <div>
      <h1> Teste state {this.state.nome} </h1>
    </div>
  )
}

}


export default App;