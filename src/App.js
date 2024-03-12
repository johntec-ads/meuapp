import React, {  Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'john', curtidas: 10, comentarios: 3},
        {id: 2, username: 'isabel', curtidas: 20, comentarios: 7},
        {id: 3, username: 'johrdan', curtidas: 47, comentarios: 17},
      ]
    }
  }

  render() {
    return(
      <div>

        {this.state.feed.map((item) => {
          return(          
            <div key={item.id} >              
              <h3> {item.username} </h3>          
              <p>curtidas {item.curtidas} /comentários {item.comentarios} </p>          
           </div>
          )
        })}
        
      </div>
    )
  }
}



export default App ;