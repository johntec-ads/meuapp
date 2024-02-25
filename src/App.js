import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      contador: 0
    };
    /* bind faz com que a function seja reconhecida
    no escopo global */
    this.contar    = this.contar.bind(this);
    this.descontar = this.descontar.bind(this);
    this.rename    = this.rename.bind(this);


  }

  

  contar () {  
    
    let soma = this.state;
    soma.contador += 1;
    this.setState( soma )
  }

  descontar ( ) {
    let desconto = this.state;
    desconto.contador -= 1;
    this.setState(desconto);

  }

  rename ( ) {
    let newname = this.state;
    newname.nome = document.getElementById('nome').value ;
    this.setState(newname)

  }

  render() {

    return (
      <div>
        <h1>
          Nome: <input id='nome'></input> {this.state.nome} 
                  <button onClick={this.rename} >Enter</button> 
          </h1>
          <h2>Novo nome: {this.state.nome} </h2>

        <h1> <button onClick={this.contar}>+</button> 
                {this.state.contador} 
             <button onClick= {this.descontar}>-</button>
        </h1>

      </div>
    )
  }
}

export default App;