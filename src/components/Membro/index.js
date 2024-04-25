import React, { Component } from 'react';

class Membro extends Component {
  constructor( props ) {
    super( props );
    this.state = {

      nome: props.nome

    }
  }



  render () {

    return (

      <div>

        <h2>Bem-vindo(a){  this.state.nome }</h2>

      </div>
    )
  }

}




export default Membro;