import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import Ejemplo3 from './hooks/Ejemplo3';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';
//import GrettingStyled from './components/pure/greetingStyled';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greting.jsdx y funcional F */}
        {/* <Greeting name='Clemen'></Greeting> */}
        {/* <Greetingf name="Clemente"></Greetingf> */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplo de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Ejemplo3></Ejemplo3> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Clemen">
          // Todo lo que hay aqui, es tratado como props.children 
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GrettingStyled name="Clemen"></GrettingStyled> */}
      </header>
    </div>
  );
}

export default App;
