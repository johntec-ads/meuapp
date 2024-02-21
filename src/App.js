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
import React from "react"
const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo}
        idade={props.idade} />
      <Social goo={props.google} face= {props.facebook} />      
    <hr/>
    </div>
  )
}



const Sobre = (props) => {
  return (
    <div>
      <h1> Meu nome: {props.nome} </h1>
      <h1> Meu cargo: {props.cargo} </h1>
      <h1> Minha idade: {props.idade} </h1>      
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href= {props.goo}>Google </a>
      <a href= {props.face}>Facebook </a>
    </div>
  )
}


function app() {
  return (
    <div>      
      <Equipe nome="john" cargo="Front-end" idade="48" google="https://google.com"
      facebook="https://facebook.com" />

      <Equipe nome="isabel" cargo="Back-end" idade="51" google="https://google.com"
      facebook="https://facebook.com" />
    </div>
  )
}

export default app