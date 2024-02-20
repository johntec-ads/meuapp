import React from "react";


const Aprendo = (props) => {
  return (
    <div>
      <h1>{props.teste}</h1>
    </div>
  )
}



function app() {
  return (
    <div>
      <Aprendo teste ='Ola Mundo!' />
      <Aprendo teste ='Testando outras dependências' />
    </div>
  )
}

export default app