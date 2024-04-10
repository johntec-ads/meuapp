import React from 'react';

const Cursos = (props) => {
  return (
    <div>
      <h1> Bem-vindo ao Curso</h1>
      <h2> {props.curso} </h2>
      <h2> {props.nome } </h2>
    </div>
  );
}




function App () {  
  return (
    <div>      
      <Cursos   curso = 'React_JS' nome='Isabel' />         
      
    </div>
  )
}

export default App ;