import React from 'react';

const Cursos = (props) => {
  return (
    <div>
      <h2> {props.curso} </h2>
      <h3> Bem-vindo  </h3>
    </div>
  );
}


const Equipe = (props) => {
  return (
    <div>     
     {props.nome}
    </div>
  )
}


function App () {  
  return (
    <div>      
      <Cursos curso = 'React_JS' />
      <Equipe nome='John'  />      
      
    </div>
  )
}

export default App ;