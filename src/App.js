import React, { Component } from 'react';
class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      status: true,
    }

    this.falso = this.falso.bind(this);
    this.verdade = this.verdade.bind(this);

  }

  falso( ) {
    this.setState( {status: false} )
  }

  verdade() {
    this.setState( {status: true} )
  }

  render () {
    return (
      <div>

        { this.state.status ?
          <div>
            <h1> Seja  muito bem-vindo! </h1>
            <h2> Tecle enter para mudar </h2>
            <button onClick={this.falso}  >Enter False</button>
            <h1> seu status é verdadeiro </h1>
          </div> :
          <div>
            <h1> Tecle enter para voltar </h1>
            <button onClick={this.verdade} >Enter Verdade</button>
            <h1> seu status é falso </h1>
          </div>

        }

      </div>
    )
  }
}




export default App;