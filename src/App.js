import React from 'react'

//component Equipe
const Equipe = ( props ) => {
  return (
    <div>
      <Sobre nome={ props.nome } idade= {props.idade} cargo= {props.cargo} />

      <Social face={props.rede1} />

    </div>
  )
}

const Sobre = ( props ) => {//component
  return (
    <div>
      <h2> Nome : { props.nome } </h2>
      <a> Idade: {props.idade} </a> /
      <a> Cargo: {props.cargo} </a>    
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
    <a> {props.face} </a>
    </div>
  )
}


//component principal
const App = () => {
  return (
    <div>
       {/* Valores do component */ }
      <Equipe nome='John' idade='48' cargo='Front-end' rede1 = 'http://facebook.com'/>
      <Equipe nome='Isabel' idade='50' cargo='Enginer IA' />
      <Equipe nome='Johrdan' idade='28' cargo='Cientista de dados' />        
    </div>
  )
}

export default App;