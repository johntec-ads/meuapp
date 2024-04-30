//sub componet
import React, { Component } from 'react';

class Feed extends Component {


  render () {

    return (
      <div>

        <h3>  { this.props.nome } </h3>
         { this.props.curtidas > 1 ?
         this.props.curtidas + ' curtidas' :
         this.props.curtidas + ' curtida' } /
         { this.props.comentarios > 1 ?
         this.props.comentarios + ' comentarios' :
         this.props.comentarios + ' comentario' }

      </div>
    )
  }

};

export default Feed;