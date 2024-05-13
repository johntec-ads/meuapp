import React, { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      email: '',
      senha: '',
      sexo: 'masculino'
    }
    this.mudarEmail = this.mudarEmail.bind( this );

  }

  mudarEmail ( e ) {
    //e -> props / target -> input apontado / value -> digitado 
    let valorDigitado = e.target.value;// recebe o input
    this.setState( { email: valorDigitado } );//recebe o novo valor

  }

  render () {

    return (
      <div>
        <h2> Loguin </h2>
        Senha
        <input type='text'
          name='senha'
          value={ this.state.senha }
          onChange={ ( e ) => this.setState( { senha: e.target.value } ) }
        />
        <br></br>

        E-mail
        <input type='email'
          name='email'
          value={ this.state.email }
          onChange={ this.mudarEmail }
        />
        <br></br>

        Sexo :
        <select>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>

        <div>
          <h3> { this.state.senha } </h3>
          <h3> { this.state.email } </h3>
        </div>


      </div>

    )
  }
}


export default App;