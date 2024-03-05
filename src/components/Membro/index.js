import React, { Component } from 'react';

class Membro extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      nome: props.nome
    }
    this.mudar = this.mudar.bind(this);
    
  }

  mudar() {
    this.setState({nome:"John"});
  }
  

  render () {
    return (
      <div>

        <h2>Bem-vindo { this.state.nome } </h2>
          <button onClick={this.mudar} >Entrar como Visitante</button>
        <br></br>
        <button onClick={() => this.setState({nome: ""})}>Sair e deletar</button>
        
      </div>

    )
  }

}

export default Membro;

