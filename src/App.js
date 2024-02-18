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
      <h2>Nome do atleta: {props.nome}</h2>
      <h2>Posição em campo: {props.posicao}</h2>
      <h2>Nível de habilidade: {props.habilidade}</h2> 
      <hr></hr>     
    </div>
  )

}

//componente principal
function app() {
  return (
    <div>
      <h1>Conheça sua equipe</h1>      
      < Equipe nome="Atleta 01" posicao="Ataque" habilidade="Nível 3" />
      < Equipe nome="Atleta 02" poisicao="Meio" habilidade="Nível 2" />
      < Equipe nome="Atleta 03" posicao="Defesa" habilidade="Nível 1" />

    </div>

  )
}


export default app