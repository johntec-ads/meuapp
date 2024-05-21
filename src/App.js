/* Criando formulários.
<label> Nome: </label>
          <input
                  type='text'
                  name='nome'
                  value={this.state.form.nome}
                  onChange={this.dadosForm}
           />

  Para varios input, cria-se um state object.
  value passa a ser a state object.
  OnChange se repete para todos os inputs.

  Exemple de select:
<label>Sexo</label>
          <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm} >
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
  
*/
import React, { Component } from 'react' ;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teste: ' teste'
    }
  }

  render() {
    return(
      <div>
        
      </div>
    
    )
  }
}


export default App ;

