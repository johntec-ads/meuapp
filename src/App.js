import React from "react"

/* A criação de componentes deve ser efetuada com uma 
aero function (=>), seguindo a mesma sintaxe do JS, sendo 
reduzida quando o código estiver em apenas uma linha, do contrario
deve ser afetuada com (arg ou props) + (=>) + ({chaves}) .
Exemplo:
No caso, a variável do componente, deve ser com letra Maiúscula.

const Variável = (props) => { DENTRO DAS CHAVES, PODEMOS
  return (
    Aqui deve ser usado o return com chaves
  )
}  */
const Equipe = (props) => {
  return (
    <div>
      <h1>Bem vindo atleta </h1>
      <h2>nome : {props.nome}</h2>
      <h2>posição : {props.posicao}</h2>

    </div>
  )
}


//componente principal
function app() {
  return (
    <div>
      
      < Equipe nome="Atleta 01" posicao="Ataque" />
      < Equipe nome="Atleta 02" />
      < Equipe nome="Atleta 03" />

    </div>

  )
}


export default app