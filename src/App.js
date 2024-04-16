import React from 'react'

//Component para boas vindas
//Criado com area function
const Equipe = ( props ) => {
  return (
    <div>
      Nossa equipe é...
      <Sobre nome={ props.nome } idade={ props.idade } profissa={ props.profissao } />
      <Social/>
      <hr></hr>

    </div>
  )
}

const Sobre = ( props ) => {
  return (
    <div>
      <h4>Nome: { props.nome }</h4>
      <a> Idade: { props.idade } /  </a>
      <a> cargo: { props.profissa } </a>
      
    </div>
  )
}

const Social = () => {
  return (
    <div>
      <a> Facebook </a>      
      <a> Youtube  </a>      
      <a> Whatsapp </a>      
      
    </div>
  )
}






//Component principal
function App () {
  return (
    <div>
      <h2> Conheça nossa equipe: </h2>
      <Equipe nome='Isabel' idade='50' profissao='Agente Financeiro' />
      <Equipe nome='John' idade='48' profissao='Front-end' />
    </div>
  )
}

export default App;