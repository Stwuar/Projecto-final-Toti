import React, {useState} from 'react';
import './App.css'; 
import './index.css'
import ConteudoTotal from './componentes/Cabeçalho';
import Formulario from './formulario';
import "./componentes/apps.css"


function App() {
    
  return (
    

  <div>
      <header>
      <ConteudoTotal/>
      </header>
      <main>
      <Formulario/> 
      </main> 
      </div>
  );
}

 export default App;