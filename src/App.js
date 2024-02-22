/* A criação de componentes deve ser efetuada com uma 
aero function (=>), seguindo a mesma sintaxe do JS, sendo 
reduzida quando o código estiver em apenas uma linha, do contrario
deve ser afetuada com (arg ou props) + (=>) + ({chaves}) .
Exemplo:
No caso, a variável do componente, deve ser com letra Maiúscula.

const Variável = (props) => {
  return (
    Aqui deve ser usado o return com chaves
  )
}  */

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

export default app