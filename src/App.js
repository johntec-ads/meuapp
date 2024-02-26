import React, {Component} from "react";

class App extends Component {

   constructor (props) {
    super(props);

    this.state = {

      horas: "00:00:00"
    }
   }


   /* Ciclos de vida dos component
      component Did Mount; Montou
      component Did update; Será desmontado
      component Will Unmount; Foi atualizado
      should component Update;deve atualizar o comp
      component Did Catch; comp pegou
     */


      /* O método componentDidMount() nos permite executar código em React quando o componente já está inserido no DOM (Modelo de Objeto de Documento). Ele é chamado durante a fase de montagem do ciclo de vida do React, ou seja, após o componente ser renderizado12.

Aqui estão os detalhes sobre o componentDidMount():

Quando é chamado?
O componentDidMount() é invocado imediatamente após a renderização inicial do componente.
É uma oportunidade para executar tarefas que dependem da presença do componente no DOM.

Importante:
Use o componentDidMount() para inicializar dados, fazer requisições à API, configurar eventos ou interagir com o DOM.
Evite atualizar o estado do componente dentro deste método, pois pode causar um loop infinito de renderização.
Em resumo, o componentDidMount() é uma ferramenta poderosa para executar código após a renderização inicial de um componente React. 🚀🌟



*/

   componentDidMount(){
    setInterval(() => {
      //Atualizar state
      this.setState( {horas: new Date ().toLocaleTimeString()} )
    }, 1000);    
   }

   /* Quando é chamado?
O componentDidUpdate() é invocado imediatamente após uma atualização do componente.
Não é chamado durante a renderização inicial.
É uma oportunidade para interagir com o DOM quando o componente foi atualizado.
Uso Comum:
O componentDidUpdate() é útil para executar ações após mudanças no estado ou nas propriedades.
Por exemplo, você pode fazer requisições à API quando as propriedades passadas para o componente mudam. 

Importante:
Lembre-se de não causar efeitos colaterais no render() ou no componentDidUpdate(), pois isso pode levar a problemas de performance ou comportamento inesperado.
Se você precisar limpar recursos (como cancelar assinaturas ou tarefas assíncronas), faça isso no componentWillUnmount().
Em resumo, o componentDidUpdate() é uma ferramenta poderosa para interagir com o DOM e executar ações específicas após atualizações em componentes React. 🚀🔄
*/
   componentDidUpdate() {
    /* console.log("Atualizando") */
   }

   
   /* Este método retorna um booleano que indica se o React deve continuar com a renderização ou não. Se shouldComponentUpdate() retornar false, então render() será completamente ignorado até que as próximas props ou state sejam alteradas. Além disso, componentWillUpdate() e componentDidUpdate() também não serão invocados. */
   
   shouldComponentUpdate() {
    
   }







  render() {
    return (
      <div>
        <h1> Relogio : {this.state.horas} </h1>      
      </div>
    )
  }
}



export default App