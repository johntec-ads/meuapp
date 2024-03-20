import React, { Component } from 'react';
class App extends Component {///

  constructor( props ) {
    super( props );
    this.state = {
      feed: [
        { id: 1, username: 'John', classe: '', compras: '30' },
        { id: 1, username: 'Isabel', classe: '', compras: '20' },
        { id: 1, username: 'Johrdan', classe: '', compras: '30' },
        { id: 1, username: 'Pacato', classe: '', compras: '40' },
      ]

    }
    this.somar = this.somar.bind( this );
    this.subtrair = this.subtrair.bind( this );
  }

  somar = ( index ) => {
    const newfeed = [ ...this.state.feed ];
    newfeed[ index ].compras = String( Number( newfeed[ index ].compras ) ) + 1
  };

  subtrair = ( index ) => {
    const newfeed = [ ...this.state.feed ];
    newfeed[ index ].compras = String( Number( newfeed[ index ].comprar ) ) - 1
  };

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