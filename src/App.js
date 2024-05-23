/* Criando formulários.
<label> Nome: </label>
          <input
                  type='text'
                  name='nome'
                  value={this.state.form.nome}
                  onChange={this.dadosForm}
           />

  a) Para varios input, cria-se um state object.
  b) value recebe a state object.
  c) OnChange se repete para todos os inputs.

  Exemple de select:
<label>Sexo</label>
          <select name='sexo' 
                  value={this.state.form.sexo} 
                  onChange={this.dadosForm} >
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
  
*/
import React, { Component } from 'react';
class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      form: {
        nome: 'John',
        email: 'john@gmail.com',
        senha: '123123',
        sexo: 'masculino'
      }

    }
    this.dadosForm = this.dadosForm.bind( this );
  }
  dadosForm ( e ) {
    let form = this.state.form;
    form[ e.target.name ] = e.target.value;
    this.setState( { form: form } )

  }


  render () {
    return (
      <div>
        <labe>Nome : </labe>
        <input type='text' name='nome'
          value={ this.state.form.nome }
          onChange={ this.dadosForm }>
        </input>
        <br></br>
        <labe>E-mail : </labe>
        <input type='email' name='email'
          value={ this.state.form.email }
          onChange={ this.dadosForm }>
        </input>
        <br></br>
        <labe>Senha : </labe>
        <input type='password' name='senha'
          value={ this.state.form.senha }
          onChange={ this.dadosForm }>
        </input>
        <br></br>
        <label>Sexo</label>

        <select name='sexo'
          value={ this.state.form.sexo }
          onChange={ this.dadosForm }>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Feminino</option>
        </select>

        <div>
          <p> {this.state.form.nome } </p>
          <p> {this.state.form.email} </p>
          <p> {this.state.form.senha} </p>
          <p> {this.state.form.sexo} </p>
          
          
         
        </div>



      </div>
    )
  }
}

export default App;