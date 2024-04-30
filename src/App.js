/* Classe-constructor-state-ArrayList-Map()-
subpasta-OperTernário */
import React, { Component } from 'react' ;
import Feed from './componets/Feed'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed : [
        {id: 1 , name: 'John',    curtidas: 1, comentarios: 1},
        {id: 2 , name: 'Isabel',  curtidas: 20, comentarios: 50},
        {id: 3 , name: 'Johrdan', curtidas: 30, comentarios: 40},
        {id: 4 , name: 'Trator',  curtidas: 40, comentarios: 30},
        {id: 5 , name: 'Pacato',  curtidas: 50, comentarios: 20},
        {id: 6 , name: 'Branco',  curtidas: 0, comentarios: 1},
      ]

    }
  };

  render() {

    return(
      <div>
        
        { this.state.feed.map((item) => {
          return(
            <div>
              <Feed 
                  id= {item.id}
                  nome= {item.name}
                  curtidas= {item.curtidas}
                  comentarios= {item.comentarios}
             />
            </div>
          )

        }) }
        
      </div>
    );
  }
};

export default App ;