import React, {Component} from "react";

class App extends Component {

  /* O contructor é o primeiro ciclo de vida */
  constructor (props) {
    super(props);
    this.state = {
      hora: "00:00:00"
    }

  }
  /* Ciclo de vida */
  componentDidMount() {

    setInterval( () => {
      this.setState( { hora: new Date().toLocaleTimeString() } )
      
    }, 1000 );

  }

  /*Ciclo de vida */
  componentDidUpdate() {
    console.log("Atualizou!!!")
  }

  shouldComponentUpdate() {
    
  }



  render () {
    return (
    <div>

      <h1> Relogio </h1>
      <h2> {this.state.hora} </h2>
    </div>      
    )
  }
}




export default App;