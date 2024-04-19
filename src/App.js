import React, { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      lista: [
        { id: 1, nome: 'john', idade: 48 },
        { id: 2, nome: 'Isabel', idade: 51 },
        { id: 3, nome: 'Jordan', idade: 28 }
      ]
    }
  }


  render () {
    return (
      <div>
        { this.state.lista.map( ( item ) => {
          return (
            <div key={ item.id }>
              <p>
                { item.nome },
                { item.idade },
              </p>

            </div>
          )
         } ) }
      </div>
    )

  }

}

export default App;