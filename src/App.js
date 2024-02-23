
import React, {Component} from "react";

class Equipe extends Component {
  render() {
    return (
      <h1> Nome : {this.props.nome} </h1>
    )
  }
}


function app () {
  return (
    <div>
      <h2> Conheça nossa equipe :) </h2>
      <Equipe nome="John" />
    </div>
  )
}

export default App