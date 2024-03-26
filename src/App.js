import React, { Component } from 'react';
class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {

      status: [
        {
          id: 1,
          nome: ' cliente 01 ',
          classificacao: 'ouro'

        },
        {
          id: 2,
          nome: ' cliente 02 ',
          classificacao: 'prata'

        },
        {
          id: 3,
          nome: ' cliente 03 ',
          classificacao: 'bronze'

        },

      ]
    }
  }

  render () {
    return (
      <div>
        {this.state.status.map ((item) => { 
          return (
            <div key={item.id}>
              <h3> {item.nome} / </h3>
              <p> {item.classificacao} </p>
             </div> 

          )
        })}

      </div>
    )
  }
}


export default App;