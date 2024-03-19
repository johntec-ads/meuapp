import React, { Component } from 'react';
class App extends Component {///

  constructor( props ) {
    super( props );
    this.state = {
      feed: [
        { id: 1, username: 'John', classe: '', compras: '10' },
        { id: 1, username: 'Isabel', classe: '', compras: '20' },
        { id: 1, username: 'Johrdan', classe: '', compras: '30' },
        { id: 1, username: 'Pacato', classe: '', compras: '40' },
      ]

    }
  }

  render () {
    return (
      <div>
        { this.state.feed.map( ( item ) => {
          return (
            <div key={ item.id }>
              <h2> { item.username } </h2>

              <a>
                { item.compras > 0 && item.compras <=10  ? item.classe + 'sem classificação':
                  item.compras < 30 ? item.classe + 'Bronze':
                  item.classe + 'Ouro'}
              </a>



            </div>

          )

        } ) }
      </div>
    )
  }
}


export default App;