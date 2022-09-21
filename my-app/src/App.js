import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
  
function App() {
    const [nome , setNome] = useState('');
    const [Apellido , setApellido] = useState('');
    const [Telefone , setTelefone] = useState('');
    const [Pais , setPais] = useState('');
    const [Assunto , setAssunto] = useState('');
    const [Mensage, setMensage] = useState('');
    const [email , setEmail] = useState('');

    // função para actualizar o estado do nome com 
    // valor inserido pelo usuário no formulário
    const handleChange =(e)=>{
      setNome(e.target.value);
    }
    // função para actualizar o estado de Apellido 
    // entrar pelo usuário no formulário
    const handleApellidoChange =(e)=>{
      setApellido(e.target.value);
    }
    // função para actualizar o estado de Telefone
    // entrar pelo usuário no formulário
    const handleTelefoneChange =(e)=>{
      setTelefone(e.target.value);
    }
    // função para atualizar o estado de Pais
    // entrar pelo usuário no formulário
    const handlePaisChange =(e)=>{
      setPais(e.target.value);
    }
    // função para atualizar o estado de Assunto
    // entrar pelo usuário no formulário
    const handleAssuntoChange =(e)=>{
      setAssunto(e.target.value);
    }
    // função para atualizar o estado de Mensage
    // entrar pelo usuário no formulário
    const handleMensageChange =(e)=>{
      setMensage(e.target.value);
    }
    // função para actualizar o estado do email com valor
    // entrar pelo usuário no formulário
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    // a função abaixo será chamada quando o usuário 
    // clique no botão enviar .
    const handleSubmit=(e)=>{
      
      {
        // exibir caixa de alerta com usuário 
        // 'detalhes de 'nome' e 'e-mail'.
        alert('Um formulário foi enviado com Nome :"' + nome +
        '" ,Apellido :"'+Apellido +'",Telefone :"' + Telefone +
        '" ,Pais :"' + Pais +'" ,Assunto :"' + Assunto +'" ,Mensage :"' + Mensage +'" , and Email :"' + email + '"');
      }
      e.preventDefault();
  
    }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          {/*quando o usuário enviar o formulário, handleSubmit() 
         função será chamada .*/}
          <div className="Titulo"><h2> Formulário de Contacto </h2></div>
          <div className="Nome">
            Nome: <input type="text" placeholder="Nome" value={nome} required onChange={(e)  => {handleChange(e)}} /><br/></div>
         { /*quando o usuário escreve na caixa de entrada de nome, handleChange()
              função será chamada. */}
         <div className="Apellido">
          Apellido:<input type="text" placeholder="Apellido" value={Apellido} required onChange={(e) => {handleApellidoChange(e)}} /><br/></div>
            { /*quando o usuário escreve na caixa de entrada de Apellido , handleApellidoChange()
               função será chamada. */}
         <div className="Telefone">
          Telefone: <input type="text" placeholder="Telefone" value={Telefone} required onChange={(e) => {handleTelefoneChange(e)}} /><br/></div>
            { /*quando o usuário escreve na caixa de entrada de Telefone , handleTelefoneChange()
               função será chamada. */} 
        <div className="Pais">
          Pais: <input type="text" placeholder="Pais" value={Pais} required onChange={(e) => {handlePaisChange(e)}} /><br/></div>
            { /*quando o usuário escreve na caixa de entrada de Pais , handlePaisChange()
               função será chamada. */}
         <div className="Assunto">
          Assunto:  <input type="text" placeholder="Assunto" value={Assunto} required onChange={(e) => {handleAssuntoChange(e)}} /><br/></div>
            { /*quando o usuário escreve na caixa de entrada de Assunto , handleAssuntoChange()
               função será chamada. */}
         <div className="Mensage">
          Mensage: <input type="text" placeholder="Mensage" value={Mensage} required onChange={(e) => {handleMensageChange(e)}} /><br/></div>
            { /*quando o usuário escreve na caixa de entrada de Mensage , handleMensageChange()
               função será chamada. */}      
         <div className="Email">
          Email: <input type="email" placeholder="Email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/></div>
          {/*quando o usuário escreve na caixa de entrada de e-mail , handleEmailChange() 
              função será chamada.*/}
        <div className="Submit">
          <input type="Submit" value="Enviar"/>
          </div>
        </form>
      </header>
    </div>
  );
}

 export default App;