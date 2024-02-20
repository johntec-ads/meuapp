/* A criação de componentes deve ser efetuada com uma 
aero function, seguindo a mesma sintaxe do JS, sendo 
reduzida quando o código estiver em apenas uma linha, do contrario
deve ser afetuada com (arg ou props) + (=>) + ({chaves}) .
Exemplo:
No caso, a variável do componente, de ser com letra
Maiúscula.

const Nome = (props) => {
  return (
    Aqui deve ser usado o return com chaves
  )
}  */

import React from "react"

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} idade={props.idade} função={props.funcão} />
      <Redes face = {props.face} />
      <hr />
    </div>

  )
}

const Redes = (props) => {
  return (
    <div>
      <a href ={props.face} >Facebook</a>

    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h3> Olá, eu sou  o {props.nome} </h3>
      <h3> tenho {props.idade} anos </h3>
      <h3> e trabalho como  {props.funcão} . </h3>
    </div>
  )
}


function app() {
  return (
    <div>
      <h2>Lista de clientes:</h2>
      <Equipe nome="John" idade="48" função="Front-end" face = "https://facebook.com"  />
      <Equipe nome="Isabel" idade="51" função="Back-end" />
    </div>
  )
}

export default app

