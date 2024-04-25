import React, { Component } from 'react' ;

class App extends Component {

  constructor (props) {
    super (props);
    this.state = {

      feed : [
        { id: 1 , nome: 'John', curtidas: 10, comentarios: 3 },
        { id: 2 , nome: 'Johrdan', curtidas: 20, comentarios: 6 },
        { id: 3 , nome: 'Isabel', curtidas: 16, comentarios: 7 },
        { id: 4 , nome: 'Trator', curtidas: 100, comentarios: 73 },
        { id: 5 , nome: 'Pacato', curtidas: 1000, comentarios: 83 },
      ]      
      
    }

  }


  render() {
    return(
      <div> 

        { this.state.feed.map( (item) => {
          
          return (
            <div key={item.id}>

              <h3> {item.nome} </h3>
              <a> Curtidas:  {item.curtidas} / </a>
              <a> Comentários {item.comentarios} </a>

            </div>
          )
        } ) }

      </div>
    )
  }
}

export default App ;