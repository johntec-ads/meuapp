import React, { Component } from "react"; 

class Feed extends Component {
  render () {
    return (
      <div>
        {
          this.state.feed.map( ( item ) => {
            return (
              <div key= {item.id} >
                <h2>
                  {
                    item.nome
                  }
                </h2>
                <a>
                  {
                    item.curtidas
                  } curtidas /
                </a>
                <a>
                  {
                    item.comentarios
                  } comentários
                </a>
              </div>
            )
          } )
        }
      </div>
    )
  }


}

export default Feed ;