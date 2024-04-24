import React, { Component } from 'react' ;

class App extends Component {

  constructor (props) {//ciclo de vida 1
    super(props);
    this.state = {
      hora: '00:00:00'

    }

  }

  render() {

    return (
      <div>
        <h1> Projeto {this.state.hora} </h1>
      </div>
    )
  }
}

export default App ;