import React from "react";

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

const Atletas = (props) => {
  return (
    <div>
      <h3> {props.nome} </h3>
      <h3> {props.posicao} </h3>
      <h3> {props.habilidade} </h3>
    </div>
  )

}



function app() {
  return (
    <div>
      <h1>Bem vindo</h1>
      <Atletas nome = 'Jogador: John'/>      
      <Atletas posicao = 'Posição: Meio'/>      
      <Atletas habilidade = 'Habilidade: 3' />      
      Olá Mundo!
    </div>
  );
};

export default app

