import React, {Component} from 'react';

class Equipe extends Component {
  render () {
    return (
      <div>
        teste
      </div>
    )
  }
}



class App extends Component { 
  
  constructor (props) {
    super(props);
    this.state = {

    }
  }  
  
  render() {
    return (
      <div>
        <Equipe/>
      </div>
    )
  }
}




export default App ;