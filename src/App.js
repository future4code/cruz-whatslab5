import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { Whatslab } from "./components/Whatslab";
import Mensagem from "./components/Mensagem.js";

// const ContainerDoApp = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   max-width: 600px;
//   height: 100vh;
//   border: 1px solid black;
// `;

// const ContainerDaMensagem = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   padding: 20px;
//   justify-content: flex-end;
// `

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mensagens: [
        {usuario: 'eu', texto: 'teste'},
        {usuario: 'Usuario', texto: 'teste'}
      ],
      inputUsuario: '',
      InputMensagem: '',
    };
  }



  usuarioHandle = (event) =>{
    this.setState({inputUsuario: event.target.value})
  }
  mensagemHandle = (event) =>{
    this.setState({InputMensagem: event.target.value})
  }
  apagarMensagem = (usuario) => {
    let novasMensagens = this.state.mensagens.filter((mensagem)=>
    {
      if(!(mensagem.usuario === usuario)){
        return true;
      }
    })
    this.setState({mensagens: novasMensagens})
  }
  adicionaMensagem = () => {
    let novaMensagem = {
      usuario: this.state.inputUsuario,
      texto: this.state.InputMensagem,
    }
    if(novaMensagem.usuario === undefined || novaMensagem.usuario === '' || novaMensagem.texto === '' || novaMensagem.texto === undefined){
      return(alert('Preencha todos os campos'));
    }
    this.setState({ mensagens: [...this.state.mensagens, novaMensagem] });
  };

  render() {
    const mensagens = this.state.mensagens.map((mensagem) => {
      return <div style={{display:"flex", flexDirection:'column'}} onDoubleClick={()=>this.apagarMensagem(mensagem.usuario)}><Mensagem  autor={mensagem.usuario} texto={mensagem.texto} /></div>;
    });
    return (
      <div>
        {mensagens}
        <input value={this.state.inputUsuario} onChange={this.usuarioHandle} placeholder="Usuario" />
        <input value={this.state.InputMensagem} onChange={this.mensagemHandle} placeholder="Mensagem" />
        <button onClick={this.adicionaMensagem} >Enviar</button>
      </div>
    );
  }
}

export default App;
