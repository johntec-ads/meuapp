import React from "react"

const Clientes = (props) => {
  return (
    <div>
    <h2> {props.nome} </h2>    
    
    </div>
  )
}


//function do aplicativo
function app () {
  //return com chaves
  return (
    <div>
      <h1> Bem vindo : </h1>
      < Clientes nome = "John" />

    
    </div>
  )
}

export default app//nome do aplicativo react