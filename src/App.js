import React, { Component } from 'react';
class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      status: false
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState( {status: false} )
  }
  sair() {
    this.setState( {status: true} )

  }

  render () {
    return (
      <div>
        { this.state.status ?
          <div>            
            <h1> Olá,bem-vindo ao sistema.</h1>
            <button onClick={this.entrar} >Off system</button>
          </div>
          :
          <div>
            <h1>System off</h1>
            <button onClick={this.sair} >Entrar sytem</button>
          </div>
        }
      </div>
    )
  }
}



export default App