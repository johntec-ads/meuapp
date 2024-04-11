import { Component } from 'react';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {

      lista: [
        { id: 1, nome: ' John ', classificar: 'Ouro' },
        { id: 2, nome: ' Jogador 2 ', classificar: 'Prata' },
        { id: 3, nome: ' Jogador 3 ', classificar: 'Bronze' },
      ]
    }
  }


  render () {
    return (
      <div>
        { this.state.lista.map( ( item ) => {
          return (
            <div>
              {item.nome}
            </div>
          )

        } ) }

      </div>
    )
  }
}


export default App;