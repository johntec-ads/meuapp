import React, { Component } from "react";
import Feed from './components/feed/index'

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      feed: [
        {
          id: 1, nome: 'John', curtidas: 13, comentarios: 454
        },
        {
          id: 2, nome: 'Isabel', curtidas: 53, comentarios: 1454
        },
        {
          id: 3, nome: 'Johrdan', curtidas: 513, comentarios: 4454
        },
      ]
    }
  }


  render () {
    return (
       <Feed/>
      
    )
  }
}


export default App;