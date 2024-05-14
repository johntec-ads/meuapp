import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome:  '',
      email: '',
      senha: '',
    }
  }

  render() {
    return(
      <div>
          <h1>Novo Usuário</h1>

        <form>
          Nome: 
          <input
                  type='text'
                  value={this.state.nome}
                  onChange={ (e) => this.setState({nome: e.target.value}) } 
          />
          <br></br>
          Email
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={ (e) => this.setState({email: e.target.value}) }
          />
          <br></br>
          Senha
          <input
            type='password'
            name='senha'
            value={this.state.senha}
            onChange={ (e) => this.setState({senha: e.target.value}) }
          />

        </form>

        <div>
          <h3> {this.state.nome} </h3>
          <h3> {this.state.email} </h3>
          <h3> {this.state.senha} </h3>
        </div>

      </div>
    )
  }
}


export default App ;