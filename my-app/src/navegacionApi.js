import React from 'react';
import Api from './Api'
import Home from './Home';
import Sobre from './Sobre';
import {BrowserRouter, Routes, Link, Route, } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navegaçao() {
  return (
    <div >
      
      <BrowserRouter>
       
       <Nav variant='tabs'>
        <Nav.Link as={Link} to="/index">Pagina Inicial</Nav.Link>
        <Nav.Link as={Link} to="/Api">Contato</Nav.Link>
        

       </Nav>





    
      

      <Routes>
       <Route path="/" index element={<Home/>}></Route>
       <Route path="/Api" element={<Api/>}></Route>
       <Route path="/Sobre" element={<Sobre/>}></Route> 
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default Navegaçao;
