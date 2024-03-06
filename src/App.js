import React, { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      status: false
    }
    this.trocar = this.trocar.bind(this);
  }

  trocar() {
    this.setState( {status: true} )
  }



  render () {
    return (
      <div>
        <button onClick={this.trocar}>Trocar bolean</button>
        { this.state.status ?
          <div>
            <h2>Bem-vindo ao sistema</h2>
          </div>:
          <div>
            <h2>Olá visitante, faça o login!</h2>
          </div>
        }



      </div>
    )
  }
}


export default App;