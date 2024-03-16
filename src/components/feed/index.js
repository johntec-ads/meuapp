import React, { Component } from "react"; 

class Feed extends Component {
  render () {
    return (
      <div key={this.props.id}>

        <h3>{this.props.nome}</h3>
        <p> curtidas { this.props.curtidas} </p>
        <p> cometários { this.props.comentarios} </p>
        <hr/>

      </div>
      
    )
  }


}

export default Feed ;