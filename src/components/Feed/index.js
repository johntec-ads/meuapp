import React, { Component } from 'react'

class Feed extends Component {

  render () {

    return (
      <div key={ this.props.id } >
        <h2> { this.props.nome } </h2>
        <a> { this.props.comentarios > 1 ?
          this.props.comentarios + ' comentarios' :
          this.props.comentarios + ' comentario'
        }  /

          { this.props.curtidas > 1 ?
            this.props.curtidas + ' curtidas' :
            this.props.curtidas + ' curtida'
          }
        </a>


      </div>
    );
  }
}



export default Feed;