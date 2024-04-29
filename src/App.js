import React, { Component } from 'react';
import Feed from './components/Feed' ;

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {

      feed: [
        { id: 1, nome: 'John', curtidas: 1, comentarios: 1 },
        { id: 2, nome: 'Johrdan', curtidas: 20, comentarios: 6 },
        { id: 3, nome: 'Isabel', curtidas: 16, comentarios: 7 },
        { id: 4, nome: 'Trator', curtidas: 100, comentarios: 73 },
        { id: 5, nome: 'Pacato', curtidas: 1000, comentarios: 83 },
      ]

    }

  }


  render () {
    return (
      <div>

        { this.state.feed.map( ( item ) => {

          return (
            <Feed
              id={ item.id }
              nome={ item.nome }
              curtidas={ item.curtidas }
              comentarios={ item.comentarios }
            />
          );
        } ) }

      </div>
    )
  }
}

export default App;