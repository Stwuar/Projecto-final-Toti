import React from "react";
import {Table, Button, Form, Modal} from "react-bootstrap";

class Api extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id: 0,
            nome: '',
            email: '',
            contato : [],
            modalAberta: false
             
        }
    }

//criaçao do componete
  componentDidMount(){
    this.buscarContato();

  }

  
  componentWillUnmount(){

  }

  // função para buscar contato da api
  buscarContato = () =>{

    fetch("http://localhost:5000/contato")
    .then(resposta => resposta.json())
    .then(dados => {
        this.setState({ contato : dados})

    })


  }

    // função para apagar contato
  deletarContato = (id) => {

    fetch("http://localhost:5000/contato/"+id, { method: 'DELETE'})
    .then(resposta => {
        if(resposta.ok){
           this.buscarContato(); 
        }

    })



  }
  // funçao para carregar dados contato
  carregarDados = (id) => {

    fetch("http://localhost:5000/contato/"+id, { method: 'GET'})
    .then(resposta => resposta.json())
    .then(contato => {
        this.setState({ 
          id : contato.id,
          nome: contato.nome,
          email: contato.email


        })
        
        this.abrirModal();
    })



  }



// função para incluir contato
cadastroContato = (contato) => {
  
  fetch("http://localhost:5000/contato",{ method:'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify(contato)
})

  
.then(resposta => {
      if(resposta.ok){
         this.buscarContato(); 
      } 
      else{
        alert('não foi posible adicionar contato')
      }

  })



}


 // função para atualizar contato 
atualizarContato = (contato) => {
  
  fetch("http://localhost:5000/contato",{ 
  method:'PUT',
  headers: { 'Content-Type':'application/json'},
  body: JSON.stringify(contato)
})

  
   .then(resposta => {
      if(resposta.ok){
         this.buscarContato(); 
      } 
      else{
        alert('não foi posible atualizar contato')
      }  

  })



}




// função para atualizar nome

  atualizarNome = (e) => {
     this.setState(
        {
         nome: e.target.value
     }
     
     )


  }

  // função para atualizar email
  atualizarEmail = (e) => {
    this.setState(
       {
        email: e.target.value
    }
    
    )


 }

 // Função para o botom
 submit = () => {


  if(this.state.id === 0){

    const contato = {

    
      nome: this.state.nome,
      email: this.state.email
    }
  
    this.cadastroContato(contato);
  

  } 
  else{
    const contato = {

      id: this.state.id,
      nome: this.state.nome,
      email: this.state.email
    }
  
    this.atualizarContato(contato);
  
 }

   this.fecharModal();

 }


// função para reiniciar formulario
 reset = () =>{

  this.setState(
    {
     id: 0, 
     nome: '', 
     email: ''
 }
 
 )
   this.abrirModal();

 }

 fecharModal = () => { 

  this.setState(
    {
      modalAberta: false

    }
  )

 }

// funçao para abrir formulario
 abrirModal = () => {

  this.setState(
    {
      modalAberta: 'tru'

    }
  )

 }




    render() {
        return(
            <body className="cuerpo">
            <Table  striped bordered hover>
                 
           <thead >
                <h1 className="titulo">Dado de Contato</h1>
             <tr>
                 <th>Nome</th>
                 <th>Email</th>
                 <th>Opções</th>
             </tr>

            </thead>

            <tbody>


                {
                 
                 this.state.contato.map((contato) =>
                 
                       <tr>
                        <td>{contato.nome }</td>
                        <td>{contato.email}</td>
                        <td>  
                          <Button variant="success" onClick={() => this.carregarDados(contato.id)}>Atualizar</Button>
                          <Button variant="danger" onClick={() => this.deletarContato(contato.id)}>Excluir</Button>
                        </td>
                      </tr>
                 )

                }
              
            </tbody>

 <div>

 <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Dados do Contato</Modal.Title>
        </Modal.Header>
 <Modal.Body>

    <Form>
       <Form.Group className="mb-3">
         <Form.Label>id</Form.Label>
         <Form.Control type="text"  value={this.state.id} readOnly={true} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do contato" value={this.state.nome} onChange={this.atualizarNome} />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite o Email do contato " value={this.state.email} onChange={this.atualizarEmail} />
        <Form.Text className="text-muted">
             Utilize Um Email.
       </Form.Text>
    </Form.Group>

    

   

    </Form>

 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.fecharModal}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={this.submit}>
              Salvar
         </Button>
        </Modal.Footer>
      </Modal>


  <Button variant="secondary" type="submit" onClick={this.reset}>
     Novo
  </Button>

 
</div>


                    


         </Table>
         </body>

        )
        
    }
        
            
} 




export default Api;
