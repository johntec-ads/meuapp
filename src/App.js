import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: 'John',
        email: 'johntec@gmail.com',
        senha: '123123',
        sexo: 'masculino'
      }   
    }    

    this.dadosForm = this.dadosForm.bind(this)
    
  }

  dadosForm(e) {

  }

    
  render() {
    return(
      <div>
          <h1>Loguin</h1>              

        <form onSubmit={this.cadastrar} >
          <label> Nome: </label>
          <input
                  type='text'
                  value={this.state.form.nome}
                  onChange={this.dadosForm} />
          <br></br>

          <label> Email: </label>
          <input
            type='email'
            name='email'
            value={this.state.form.email}
            onChange={ (e) => this.setState({email: e.target.value}) }
          />
          <br></br>
          <label> Senha: </label>
          <input
            type='password'
            name='senha'
            value={this.state.form.senha}
            onChange={ (e) => this.setState({senha: e.target.value}) }
          />
          <br></br>

          <label>Sexo</label>
          <select name='sexo' value={this.state.form.sexo} onChange={this.trocaSexo} >
            <option>Masculino</option>
            <option>Feminino</option>
          </select>

          <br></br>        
         
        </form>

        <div>
          <h3> {this.state.form.nome} </h3>
          <h3> {this.state.form.email} </h3>
          <h3> {this.state.form.senha} </h3>
          <h3> {this.state.form.sexo} </h3>
        </div>

      </div>
    )
  }
}


export default App ;