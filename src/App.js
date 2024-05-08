import React, { Component } from 'react' ;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      
    }

  }
  render() {

    return (

        <div>
          E-mail <br></br>
          <input type='email' name='email' value= 'teste@teste.com' />

        </div>
    )
  }
}


export default App ;