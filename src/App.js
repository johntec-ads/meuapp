import React, { Component } from 'react';
class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      senha: '',
      email: '',
      sexo: ''
    }

    this.trocaSenha = this.trocaSenha.bind( this );
    this.trocaEmail = this.trocaEmail.bind( this );
    this.trocaSexo = this.trocaSexo.bind( this );

  }

  trocaSenha ( e ) {
    let upValue = e.target.value;
    this.setState( { senha: upValue } );
  }

  trocaEmail ( e ) {
    let upValue = e.target.value;
    this.setState( { email: upValue } )
  }

  trocaSexo ( e ) {
    let upValue = e.target.value;
    this.setState( { sexo: upValue } )
  }

  render () {
    return (
      <div>
        <h4> Cadastro </h4>

        Senha :
        <input
          type='text'
          name='senha'
          value={ this.state.senha }
          onChange={ this.trocaSenha }
        />

        <br></br>

        Email :
        <input
          type='email'
          name='email'
          value={ this.state.email }
          onChange={ this.trocaEmail }
        />


        <br></br>

        Sexo :
        <select
          name='sexo'
          value={ this.state.sexo }
          onChange={ this.trocaSexo } 
        >
          <option value='masculino' >Masculino</option>
          <option value='feminino' >Feminino</option>
        </select>

        <div>
          <h3> { this.state.senha } </h3>
          <h3> { this.state.email } </h3>
          <h3> { this.state.sexo } </h3>
        </div>
      </div>
    )
  }
}


export default App;