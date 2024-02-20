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
  return(
    <div>              
      <Sobre nome  = {props.nome} cargo = {props.cargo} idade = {props.idade} />
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>      
      <h3>Olá, meu nome é {props.nome}</h3>
       <h3>Sou desenvolvedor {props.cargo}  </h3>
       <h3>e tenho {props.idade} anos de idade.</h3>
    
    </div>
  )
}


function app () {
  return (
      <div>
        <h1></h1>
        <Equipe nome = "John" cargo = "Front-end" idade = "48" />
        <Sobre />
      </div>
  )
}


export default app