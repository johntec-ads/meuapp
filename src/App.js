import React, { Component } from 'react';
class App extends Component {///

  constructor( props ) {
    super( props );
    this.state = {
      feed: [
        { id: 1, username: 'John', classe: '', compras: '30' },
        { id: 2, username: 'Isabel', classe: '', compras: '20' },
        { id: 3, username: 'Johrdan', classe: '', compras: '30' },
        { id: 4, username: 'Pacato', classe: '', compras: '40' },
      ]

    }
    this.somar = this.somar.bind( this );
    this.subtrair = this.subtrair.bind( this );
  }

  somar = (index) => {
    // Atualiza o estado de forma assíncrona
    this.setState(estadoAnterior => {
      // Cria uma cópia do array 'feed' do estado anterior
      const newFeed = [...estadoAnterior.feed];
      // Incrementa o valor de 'compras' para o item no índice especificado
      newFeed[index].compras = String(Number(newFeed[index].compras) + 1);
      // Retorna um novo objeto de estado com o 'feed' atualizado
      return { feed: newFeed };
    });
  };
  

  subtrair = ( index ) => {

  }  

  render () {
    return (
      <div>
        { this.state.feed.map( ( item, index ) => {
          return (

            <div key={ item.id }>
              <h2> <button onClick={ () => this.somar( index ) }> + </button> { item.username } <button onClick={ () => this.subtrair( index ) }> - </button>  </h2 >

              <a>
                Classificação : { item.compras > 0 && item.compras <= 10 ? item.classe + 'Inciante' :
                  item.compras < 20 ? item.classe + 'Bronze' :
                    item.compras < 30 ? item.classe + 'Prata' :
                      item.classe + 'Ouro' } /
              </a>

              <a> Compras: { item.compras } </a>

            </div>

          )

        } ) }
      </div>
    )
  }
}


export default App;