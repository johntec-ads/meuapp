import React, {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Horas: "00:00:00",
      Id: " Cliente_001"
    }
  }

  //Cicle life Componet:
  componentDidMount() {//Montou
    setInterval(() => {
      this.setState( {Horas: new Date().toLocaleTimeString()} )
      
    }, 1000);
  }

  componentDidUpdate() {//Atualizou ?
    console.log("Atualizando")
  }

  /* shouldComponentUpdate() {

  } */



  render() {

    return (
    
    <div>
      <h1> {this.state.Horas} </h1>
      <h1>Clientes:</h1>
        <h2> {this.state.Id} </h2>
    </div>

    )
  }
}

export default App;