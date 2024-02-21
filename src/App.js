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

import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre nome = {this.props.nome} cargo={this.props.cargo} 
               idade={this.props.idade} />
        <Social goo={this.props.google} />
      <hr/>
      </div>
    )
  }
}

const Social = (props) => {
  return ( 
    <div>
      <a href={props.goo} > Google.com </a>
    </div>
  )
}

class Sobre extends Component {
  render () {
    return (
      <div>
        <h2> Olá sou o (a) {this.props.nome} </h2>
        <h3> Trabalho como {this.props.cargo} </h3>
        <h4> Minha idade é {this.props.idade} nos. </h4>        
      </div>
    )
  }
}



function app() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome= "John" cargo="Programador Front-end" idade="48" google="https://google.com" />
      <Equipe nome= "Johrdan" cargo="Programador Full-stack" idade="28" google="https://google.com" />
    </div>
  )
}

export default app