import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      senha:'',
      email: '',
      sexo: 'masculino'
    }

    this.trocarSenha = this.trocarSenha.bind(this);

    this.trocarEmail = this.trocarEmail.bind(this);

    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocarSenha(e) {
    let valorDigitado = e.target.value;
    this.setState({senha:valorDigitado})
  }

  trocarEmail(e) {
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }

  trocaSexo(e) {
    let valorDigitado = e.target.value;
    this.setState({sexo: valorDigitado})
  }

  render() {
    return(
      <div>
        <h3>Cadastro</h3>
        Senha : 
        <input type='text' name='senha' value={this.state.senha} onChange={this.trocarSenha} /> <br></br>

        E-mail :
        <input type='email' name='email' value={this.state.email} onChange={this.trocarEmail} /><br></br>

        Sexo :
        <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo} >
          <option value='masculino'>Masculino</option>
          <option value='feminino' >Feminino</option>
        </select>

        <div>
          <h3> {this.state.senha} </h3>
          <h3> {this.state.email} </h3>
          <h3> {this.state.sexo} </h3>
        </div>
      </div>
    )
  }
}

export default App ;