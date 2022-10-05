import React, {useState} from 'react';
import './App.css'; 
import './index.css'
import ConteudoTotal from './componentes/Cabeçalho';
import Formulário from './formulario';
import "./componentes/apps.css"


function App() {
    
  return (
    

  <div>
      <header>
      <ConteudoTotal/>
      </header>
      <main>
      <Formulário/> 
      </main> 
      </div>
  );
}

 export default App;