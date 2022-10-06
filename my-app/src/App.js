import React, {useState} from 'react';
import './App.css'; 
import './index.css'
//import Redes from './componentes/Redes';//
import ConteudoTotal from './componentes/Cabeçalho';
import Formulario from './formulario';
import "./componentes/apps.css"
import Navegaçao from "./navegacionApi"

function App() {
    
  return (
    

  <div>
      <header>
      <ConteudoTotal/>
      </header>
      <main>
      <Formulario/>
      </main> 
      <Navegaçao/>
      {/*<Redes/>*/}
      </div>
  );
}

 export default App;